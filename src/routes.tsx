import type { RouteRecord } from 'vite-react-ssg'
import Layout from './Layout'
import Inicio from './pages/Inicio'
import { site } from './data/site'
import { blogPosts } from './data/blog'

/*
 * H32: el inicio va en el paquete principal; las demás páginas se cargan aparte (rutas diferidas),
 * así el celular descarga menos JavaScript en la página más visitada.
 */
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/Layout.tsx',
    children: [
      { index: true, Component: Inicio, entry: 'src/pages/Inicio.tsx' },
      {
        path: 'nosotros',
        lazy: async () => ({ Component: (await import('./pages/Nosotros')).default }),
        entry: 'src/pages/Nosotros.tsx',
      },
      {
        path: 'inclusion',
        lazy: async () => ({ Component: (await import('./pages/Inclusion')).default }),
        entry: 'src/pages/Inclusion.tsx',
      },
      {
        path: 'blog',
        lazy: async () => ({ Component: (await import('./pages/Blog')).default }),
        entry: 'src/pages/Blog.tsx',
      },
      ...blogPosts.map((post) => ({
        path: `blog/${post.slug}`,
        lazy: async () => {
          const { default: ArticuloBlog } = await import('./pages/ArticuloBlog')
          return { element: <ArticuloBlog slug={post.slug} /> }
        },
        entry: 'src/pages/ArticuloBlog.tsx',
      })),
      // El vacacional está escondido mientras site.mostrarVacacional sea false
      ...(site.mostrarVacacional
        ? [
            {
              path: 'vacacionales',
              lazy: async () => ({ Component: (await import('./pages/Vacacionales')).default }),
              entry: 'src/pages/Vacacionales.tsx',
            },
          ]
        : []),
      {
        path: 'privacidad',
        lazy: async () => ({ Component: (await import('./pages/Privacidad')).default }),
        entry: 'src/pages/Privacidad.tsx',
      },
    ],
  },
]
