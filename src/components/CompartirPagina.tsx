import { useState } from 'react'
import { site } from '../data/site'
import s from './CompartirPagina.module.css'

interface Props {
  titulo: string
  ruta: string
  etiqueta: string
}

export function CompartirPagina({ titulo, ruta, etiqueta }: Props) {
  const [estado, setEstado] = useState('')
  const [enlace, setEnlace] = useState('')

  async function compartir() {
    const url = new URL(ruta, site.url ?? window.location.origin).href
    setEstado('')
    setEnlace('')

    if (navigator.share) {
      try {
        await navigator.share({ title: titulo, url })
        return
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
      }
    }

    try {
      await navigator.clipboard.writeText(url)
      setEstado('Enlace copiado. Ya puedes pegarlo en un mensaje.')
    } catch {
      setEnlace(url)
      setEstado('Selecciona y copia el enlace para compartirlo.')
    }
  }

  return (
    <div className={s.compartir}>
      <button type="button" className="btn btn-borde btn-sm" onClick={compartir}>{etiqueta}</button>
      <div role="status" className={s.estado}>{estado}</div>
      {enlace && (
        <input aria-label="Enlace para compartir" type="url" readOnly value={enlace} onFocus={(event) => event.target.select()} />
      )}
    </div>
  )
}
