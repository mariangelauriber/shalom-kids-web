import type { ReactNode } from 'react'
import { urlWhatsApp } from '../data/site'
import { registrar } from '../lib/analytics'

interface Props {
  /** Dónde está el botón; se envía a la medición para saber qué convierte */
  origen: string
  className?: string
  children: ReactNode
  mensaje?: string
  'aria-label'?: string
}

export function EnlaceWhatsApp({ origen, className, children, mensaje, ...rest }: Props) {
  return (
    <a
      href={urlWhatsApp(mensaje)}
      target="_blank"
      rel="noopener"
      className={className}
      onClick={() => registrar('whatsapp_click', { origen })}
      {...rest}
    >
      {children}
    </a>
  )
}
