import { useEffect, useState } from 'react'
import { renovacionVigente, valorDelMesVigente } from '../data/site'

/** H12: si se compila después del fin de la renovación, ningún texto de renovación llega al HTML */
export const renovacionAlCompilar = renovacionVigente(Date.parse(__FECHA_COMPILACION__))

/**
 * ¿Se puede hablar de la renovación? El primer render coincide con el HTML compilado (sin errores de
 * hidratación); después, en el navegador, se apaga si la fecha actual ya pasó el fin de la renovación.
 */
export function useRenovacionVigente(): boolean {
  const [vigente, setVigente] = useState(renovacionAlCompilar)

  useEffect(() => {
    if (vigente && !renovacionVigente()) setVigente(false)
  }, [vigente])

  return vigente
}

/** I-9: «El valor de este mes» caduca solo; misma lógica que la renovación (HTML compilado y navegador) */
export const valorDelMesAlCompilar = valorDelMesVigente(Date.parse(__FECHA_COMPILACION__))

export function useValorDelMesVigente(): boolean {
  const [vigente, setVigente] = useState(valorDelMesAlCompilar)

  useEffect(() => {
    if (vigente && !valorDelMesVigente()) setVigente(false)
  }, [vigente])

  return vigente
}
