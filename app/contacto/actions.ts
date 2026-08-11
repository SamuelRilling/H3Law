'use server'

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Partial<Record<'nombre' | 'apellido' | 'email' | 'mensaje', string>>
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const nombre = String(formData.get('nombre') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const mensaje = String(formData.get('mensaje') ?? '').trim()

  const fieldErrors: ContactFormState['fieldErrors'] = {}
  if (!nombre) fieldErrors.nombre = 'Ingresa tu nombre.'
  if (!email) {
    fieldErrors.email = 'Ingresa tu email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = 'Ingresa un email válido.'
  }
  if (!mensaje) fieldErrors.mensaje = 'Escribe un mensaje.'

  if (Object.keys(fieldErrors).length > 0) {
    return { status: 'error', fieldErrors, message: 'Revisa los campos marcados.' }
  }

  // TODO: connect to an email provider (e.g. Resend) once RESEND_API_KEY is configured.
  // For now this validates and acknowledges the submission without dispatching an email.
  if (!process.env.RESEND_API_KEY) {
    return {
      status: 'error',
      message: 'El envío de mensajes aún no está configurado. Escríbenos directamente por correo o teléfono.',
    }
  }

  return { status: 'success', message: 'Gracias, te contactaremos a la brevedad.' }
}
