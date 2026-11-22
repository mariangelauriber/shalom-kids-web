// Las fuentes se declaran en global.css (solo subconjuntos latinos y el hebreo de Fredoka), H10
import './styles/global.css'

import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'

export const createRoot = ViteReactSSG({ routes, basename: import.meta.env.BASE_URL })
