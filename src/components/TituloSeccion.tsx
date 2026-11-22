import type { ReactNode } from 'react'
import s from './TituloSeccion.module.css'

type Color = 'naranja' | 'turquesa' | 'morado'

interface Props {
  antetitulo?: string
  titulo: ReactNode
  intro?: ReactNode
  color?: Color
  id?: string
  centrado?: boolean
  claro?: boolean
}

export function TituloSeccion({ antetitulo, titulo, intro, color = 'turquesa', id, centrado, claro }: Props) {
  return (
    <header className={`${s.cabeza} ${centrado ? s.centrado : ''} ${claro ? s.claro : ''}`}>
      {antetitulo && (
        <p className={`${s.ante} ${s[color]}`}>
          <span className={s.punto} aria-hidden="true" />
          {antetitulo}
        </p>
      )}
      <h2 id={id} className={s.titulo}>
        {titulo}
      </h2>
      {intro && <p className={s.intro}>{intro}</p>}
    </header>
  )
}
