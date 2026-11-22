import { useState } from 'react'
import { Pendiente } from '../components/Pendiente'
import { Seo } from '../components/Seo'
import { site, telefonoLegible } from '../data/site'
import { borrarConsentimiento, medicionConfigurada } from '../lib/analytics'
import s from './Privacidad.module.css'

function CambiarCookies() {
  const [hecho, setHecho] = useState(false)
  if (!medicionConfigurada) return null
  return (
    <p>
      <button
        type="button"
        className="btn btn-sm btn-borde"
        onClick={() => {
          borrarConsentimiento()
          setHecho(true)
        }}
      >
        Cambiar mi decisión sobre cookies
      </button>{' '}
      {hecho && <span role="status">Listo. Al volver a cargar la página te preguntaremos de nuevo.</span>}
    </p>
  )
}

export default function Privacidad() {
  const l = site.legal
  const telefono = telefonoLegible()
  return (
    <>
      <Seo
        ruta="/privacidad/"
        titulo={`Aviso de privacidad · ${site.nombreCompleto}`}
        descripcion={`Cómo el ${site.nombre} trata los datos personales de las familias, según la Ley 1581 de 2012.`}
      />
      <article className={`contenedor ${s.doc}`}>
        <p className={s.volver}>
          <a href="/">← Volver al inicio</a>
        </p>
        <h1>Aviso de privacidad y tratamiento de datos personales</h1>

        <h2>1. Responsable</h2>
        <p>
          {l.razonSocial ?? <Pendiente>razón social</Pendiente>}
          {l.razonSocial !== site.nombre && ` (${site.nombre})`}, NIT{' '}
          {l.nit ?? <Pendiente>NIT</Pendiente>}, con domicilio en{' '}
          {site.direccion.calle ?? <Pendiente>dirección</Pendiente>}, barrio {site.direccion.barrio},{' '}
          {site.direccion.municipio}, {site.direccion.departamento}, Colombia. Correo:{' '}
          <a href={`mailto:${site.correo}`}>{site.correo}</a>.
          {telefono && <> Teléfono y WhatsApp: {telefono}.</>}
        </p>

        <h2>2. Qué datos recogemos</h2>
        <ul>
          <li>
            <strong>Formulario de la web:</strong> nombre del acudiente, número de WhatsApp, grado de interés y,
            si lo escribes, un mensaje.
          </li>
          <li>
            <strong>WhatsApp:</strong> los datos que nos compartas al escribirnos.
          </li>
        </ul>
        <p>
          Por la web no te pedimos datos de los niños, solo el grado de interés. Si decides compartirlos con
          nosotros, los tratamos como datos sensibles, según el punto 4. Los datos de los estudiantes se tratan en
          el proceso de matrícula, con la autorización de su padre, madre o acudiente.
        </p>

        <h2>3. Para qué los usamos</h2>
        <ul>
          <li>Responder tu solicitud de información sobre el proceso de matrícula.</li>
          <li>Agendar visitas al colegio.</li>
          <li>Enviarte información del proceso de matrícula {site.matriculas.anio}.</li>
          <li>Si nos hablas de inclusión, orientarte sobre el ingreso de tu hijo y los apoyos en el aula.</li>
        </ul>
        <p>No vendemos tus datos ni los usamos para fines distintos a los de esta lista.</p>

        <h2>4. Datos sensibles y datos de niños</h2>
        <p>
          Si al conversar sobre inclusión decides contarnos información de salud, desarrollo o aprendizaje de tu
          hijo, se trata de datos sensibles y de datos de un menor de edad (Ley 1581 de 2012, artículos 5, 6 y 7).
        </p>
        <ul>
          <li>Responder preguntas sobre esos datos es voluntario: no estás obligado a darlos.</li>
          <li>
            Solo los usamos para orientarte sobre el ingreso de tu hijo y los apoyos que puede necesitar, y solo con
            tu autorización expresa como padre, madre o acudiente, que te pediremos antes de tratarlos.
          </li>
          <li>Los tratamos respetando el interés superior del niño y sus derechos.</li>
          <li>Para un primer contacto no hace falta enviar documentos médicos ni diagnósticos.</li>
        </ul>

        <h2>5. Servicios de terceros</h2>
        <ul>
          <li>
            <strong>Web3Forms:</strong> envía los datos del formulario a nuestro correo.
          </li>
          <li>
            <strong>WhatsApp (Meta):</strong> conversación con las familias.
          </li>
          {medicionConfigurada && (
            <li>
              <strong>Google Analytics y Meta Pixel:</strong> medición de visitas y clics, solo si aceptas las
              cookies de medición.
            </li>
          )}
          <li>
            <strong>Instagram y Google Maps:</strong> se cargan solo cuando tocas una publicación o el mapa.
          </li>
        </ul>
        <p>Estos servicios pueden guardar información en servidores fuera de Colombia.</p>

        <h2>6. Tus derechos</h2>
        <p>Según el artículo 8 de la Ley 1581 de 2012, puedes:</p>
        <ul>
          <li>Conocer, actualizar y rectificar tus datos.</li>
          <li>Pedir prueba de la autorización que nos diste.</li>
          <li>Saber cómo hemos usado tus datos.</li>
          <li>Revocar la autorización o pedir que borremos tus datos.</li>
          <li>Acceder gratis a tus datos.</li>
          <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</li>
        </ul>

        <h2>7. Cómo ejercerlos</h2>
        <p>
          Las consultas y los reclamos los atiende {l.atiende} en{' '}
          <a href={`mailto:${site.correo}`}>{site.correo}</a>
          {telefono && <> o al {telefono} (también por WhatsApp)</>}.
        </p>
        <ul>
          <li>
            <strong>Consultas</strong> (para conocer tus datos o cómo los usamos): te respondemos en máximo 10 días
            hábiles desde que la recibimos. Si no podemos hacerlo en ese plazo, te explicamos el motivo y te
            respondemos a más tardar 5 días hábiles después de vencido el primer plazo.
          </li>
          <li>
            <strong>Reclamos</strong> (para corregir, actualizar o borrar tus datos, revocar la autorización o
            avisar de un incumplimiento): la solicitud debe incluir tu nombre e identificación, la descripción de los
            hechos, tu dirección o el medio por el que quieres la respuesta y los documentos que quieras aportar.
          </li>
          <li>
            Si el reclamo está incompleto, te pedimos dentro de los 5 días siguientes a recibirlo que lo completes.
            Si pasan dos meses sin que lo hagas, entendemos que desististe del reclamo.
          </li>
          <li>
            Respondemos los reclamos en máximo 15 días hábiles, contados desde el día siguiente a recibirlos. Si no
            es posible, te informamos el motivo y la fecha de respuesta, que no superará 8 días hábiles después del
            primer plazo (artículos 14 y 15 de la Ley 1581 de 2012).
          </li>
        </ul>

        <h2>8. Cookies</h2>
        {medicionConfigurada ? (
          <p>
            La web solo usa cookies de medición si las aceptas en el aviso que aparece al entrar. Sin aceptarlas, la
            web funciona igual.
          </p>
        ) : (
          <p>
            Hoy la web no usa cookies de medición. Si en el futuro las usamos, te pediremos permiso con un aviso al
            entrar, y sin aceptarlas la web funcionará igual.
          </p>
        )}
        <CambiarCookies />

        <h2>9. Vigencia y conservación de los datos</h2>
        <p>
          Este aviso rige desde el {l.vigenteDesde ?? <Pendiente>fecha de publicación</Pendiente>}. Guardamos los
          datos mientras sean necesarios para las finalidades descritas. Si tu familia no se matricula, los
          conservamos hasta un año después del último contacto y luego los eliminamos, salvo que una obligación
          legal nos exija guardarlos por más tiempo.
        </p>
      </article>
    </>
  )
}
