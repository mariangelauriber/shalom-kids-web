import type { ReactNode } from 'react'

/** Marca visible de dato faltante. Buscar con `npm run pendientes`. */
export function Pendiente({ children }: { children?: ReactNode }) {
  return (
    <mark className="pendiente">
      [PENDIENTE{children ? ': ' : ''}
      {children}]
    </mark>
  )
}
