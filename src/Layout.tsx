import { Outlet } from 'react-router-dom'
import { AvisoCookies } from './components/AvisoCookies'
import { BarraAnuncio } from './components/BarraAnuncio'
import { BotonWhatsApp } from './components/BotonWhatsApp'
import { Cabecera } from './components/Cabecera'
import { Pie } from './components/Pie'

export default function Layout() {
  return (
    <>
      <a href="#contenido" className="saltar">
        Saltar al contenido
      </a>
      <BarraAnuncio />
      <Cabecera />
      <main id="contenido">
        <Outlet />
      </main>
      <Pie />
      <BotonWhatsApp />
      <AvisoCookies />
    </>
  )
}
