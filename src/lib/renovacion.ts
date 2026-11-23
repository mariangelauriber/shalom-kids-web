import { useEffect, useRef, useState } from 'react'
import { descuentoVigente, renovacionVigente, valorDelMesVigente } from '../data/site'

const compilado = Date.parse(__FECHA_COMPILACION__)

/** H12: si se compila después del fin de la renovación, ningún texto de renovación llega al HTML */
export const renovacionAlCompilar = renovacionVigente(compilado)

/** Ajuste 9 (23 nov 2026): el descuento de matrícula caduca igual que la renovación */
export const descuentoAlCompilar = descuentoVigente(compilado)

/** I-9: «El valor de este mes» caduca solo; misma lógica que la renovación (HTML compilado y navegador) */
export const valorDelMesAlCompilar = valorDelMesVigente(compilado)

/**
 * Texto con fecha de vencimiento. El primer render coincide con el HTML compilado (sin errores de hidratación);
 * después, en el navegador, se apaga si la fecha actual ya pasó el vencimiento.
 */
function useVigente(alCompilar: boolean, vigenteAhora: () => boolean): boolean {
  const [vigente, setVigente] = useState(alCompilar)

  const seApago = useRef(false)

  useEffect(() => {
    if (vigente && !vigenteAhora()) {
      seApago.current = true
      setVigente(false)
    }
  }, [vigente, vigenteAhora])

  // Al quitar el texto vencido la página se acorta y un ancla ya alcanzada (p. ej. /#preguntas) queda corrida:
  // con el DOM ya actualizado se vuelve a llevar al destino (respeta el scroll-margin de la cabecera fija)
  useEffect(() => {
    if (vigente || !seApago.current) return
    seApago.current = false
    const id = window.location.hash.slice(1)
    if (!id) return
    let destino: HTMLElement | null = null
    try {
      destino = document.getElementById(decodeURIComponent(id))
    } catch {
      destino = null
    }
    destino?.scrollIntoView({ block: 'start' })
  }, [vigente])

  return vigente
}

/** ¿Se puede hablar de la renovación? (hasta el 30 nov 2026; después no se dice nada) */
export function useRenovacionVigente(): boolean {
  return useVigente(renovacionAlCompilar, renovacionVigente)
}

/** ¿Se puede mencionar el descuento de matrícula? (hasta el 3 dic 2026) */
export function useDescuentoVigente(): boolean {
  return useVigente(descuentoAlCompilar, descuentoVigente)
}

export function useValorDelMesVigente(): boolean {
  return useVigente(valorDelMesAlCompilar, valorDelMesVigente)
}
