import { useId, useState, type FormEvent } from 'react'
import { preescolar, primaria } from '../data/contenido'
import { site } from '../data/site'
import { registrar } from '../lib/analytics'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoCheck, IconoWhatsApp } from './Iconos'
import { Pendiente } from './Pendiente'
import s from './FormularioCupo.module.css'

type Estado = 'inicial' | 'enviando' | 'enviado' | 'error'

const grados = [...preescolar, ...primaria].map((g) =>
  g.corto.includes('º') ? `${g.corto} (${g.nombre.toLowerCase()})` : g.nombre,
)

/**
 * Envía la solicitud a shalom_kids@hotmail.com mediante Web3Forms.
 * Solo pide los datos necesarios (Ley 1581): nada del niño salvo el grado.
 */
interface Props {
  /** Servicio que se solicita (p. ej. el vacacional). Por defecto, matrícula. */
  servicio?: string
  etiquetaGrado?: string
  mensajeWhatsApp?: string
}

export function FormularioCupo({ servicio, etiquetaGrado = 'Grado de interés', mensajeWhatsApp }: Props) {
  const [estado, setEstado] = useState<Estado>('inicial')
  const id = useId()
  const activo = Boolean(site.web3formsClave)

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!activo || estado === 'enviando') return
    const fd = new FormData(e.currentTarget)
    if (fd.get('botcheck')) return
    if (fd.get('autorizacion') !== 'on') return
    /* SEC-12: un nombre o un teléfono hechos solo de espacios no se envían */
    const nombre = String(fd.get('nombre') ?? '').trim()
    const telefono = String(fd.get('telefono') ?? '').trim()
    if (nombre.length < 2 || !telefono) {
      const campo = e.currentTarget.elements.namedItem(nombre.length < 2 ? 'nombre' : 'telefono')
      if (campo instanceof HTMLInputElement) campo.focus()
      return
    }

    setEstado('enviando')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: site.web3formsClave,
          botcheck: fd.get('botcheck') ? true : '',
          subject: servicio
            ? `Inscripción: ${servicio} (desde la web)`
            : `Solicitud de información de matrícula ${site.matriculas.anio} desde la web`,
          Servicio: servicio ?? `Matrícula ${site.matriculas.anio}`,
          from_name: 'Web Shalom Kids',
          'Nombre del acudiente': nombre,
          WhatsApp: telefono,
          'Grado de interés': fd.get('grado'),
          Mensaje: String(fd.get('mensaje') ?? '').trim() || '(sin mensaje)',
          'Autorización de datos': 'Sí. Aceptó el aviso de privacidad (Ley 1581 de 2012).',
        }),
      })
      const data = (await res.json()) as { success?: boolean }
      if (!res.ok || !data.success) throw new Error('envío fallido')
      setEstado('enviado')
      // H13: sin el grado (dato que indica la edad del niño); los grados se cuentan en los correos de Web3Forms
      registrar('formulario_enviado', { servicio: servicio ?? 'matricula' })
    } catch {
      setEstado('error')
    }
  }

  if (!activo) {
    return (
      <div className={s.form}>
        <p><Pendiente>envío desde la web</Pendiente> Por ahora, puedes escribirnos por WhatsApp.</p>
        <EnlaceWhatsApp origen="formulario-whatsapp" mensaje={mensajeWhatsApp} className="btn btn-borde">
          <IconoWhatsApp />
          {servicio ? 'Consultar por WhatsApp' : 'Solicita el formulario'}
        </EnlaceWhatsApp>
      </div>
    )
  }

  if (estado === 'enviado') {
    return (
      <div className={s.gracias} role="status">
        <span className={s.check}>
          <IconoCheck />
        </span>
        <p>
          <strong>¡Gracias! Recibimos tu solicitud.</strong> Te escribiremos al WhatsApp que nos dejaste.
        </p>
        <p>Si quieres adelantar, escríbenos ahora:</p>
        <EnlaceWhatsApp origen="formulario-gracias" mensaje={mensajeWhatsApp} className="btn btn-primario">
          <IconoWhatsApp />
          Seguir por WhatsApp
        </EnlaceWhatsApp>
      </div>
    )
  }

  return (
    <form className={s.form} onSubmit={enviar}>
      <div className={s.campo}>
        <label htmlFor={`${id}-nombre`}>Nombre del acudiente</label>
        <input id={`${id}-nombre`} name="nombre" type="text" autoComplete="name" required maxLength={80} />
      </div>

      <div className={s.campo}>
        <label htmlFor={`${id}-tel`}>Número de WhatsApp</label>
        <input
          id={`${id}-tel`}
          name="telefono"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          maxLength={20}
          pattern="(?=(?:[^0-9]*[0-9]){7,15}[^0-9]*$)\+?[0-9 \(\)\-]{7,20}"
          placeholder="Ej.: 300 123 4567"
        />
      </div>

      <div className={s.campo}>
        <label htmlFor={`${id}-grado`}>{etiquetaGrado}</label>
        <select id={`${id}-grado`} name="grado" required defaultValue="">
          <option value="" disabled>
            Elige un grado
          </option>
          {grados.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div className={s.campo}>
        <label htmlFor={`${id}-msg`}>
          Mensaje <span className={s.opcional}>(opcional)</span>
        </label>
        <textarea id={`${id}-msg`} name="mensaje" rows={3} maxLength={600} />
      </div>

      {/* Trampa para robots: las personas no la ven */}
      <input type="checkbox" name="botcheck" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <label className={s.autorizacion}>
        <input type="checkbox" name="autorizacion" required />
        <span>
          Autorizo al {site.nombre} a tratar mis datos para responder esta solicitud, según el{' '}
          <a href="/privacidad/" target="_blank" rel="noopener">
            aviso de privacidad
          </a>{' '}
          (Ley 1581 de 2012).
        </span>
      </label>

      {estado === 'error' && (
        <p className={s.error} role="alert">
          No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button type="submit" className={`btn btn-primario ${s.enviar}`} disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando…' : servicio ? 'Quiero que me contacten' : 'Pide el formulario'}
      </button>
    </form>
  )
}
