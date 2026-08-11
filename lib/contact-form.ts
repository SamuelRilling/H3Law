export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Partial<Record<'nombre' | 'apellido' | 'email' | 'mensaje', string>>
}

// TODO: this site is a static export (GitHub Pages) with no server, so submissions
// are only validated client-side and never sent anywhere. Wire this up to a
// static-friendly form backend (e.g. Formspree, Web3Forms) or a mailto: fallback.
export function validateContactForm(formData: FormData): ContactFormState {
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

  return {
    status: 'error',
    message: 'El envío de mensajes aún no está configurado. Escríbenos directamente por correo o teléfono.',
  }
}
