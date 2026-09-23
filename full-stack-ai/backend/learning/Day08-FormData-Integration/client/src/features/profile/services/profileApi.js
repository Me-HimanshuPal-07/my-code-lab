export const saveProfile = async ({ name, email, image, removeImage, zoom, position, rotation }) => {
  const payload = new FormData()
  payload.append('name', name)
  payload.append('email', email)
  payload.append('zoom', String(zoom))
  payload.append('positionX', String(position.x))
  payload.append('positionY', String(position.y))
  payload.append('rotation', String(rotation))

  if (image) {
    payload.append('image', image)
  }

  if (removeImage) {
    payload.append('removeImage', 'true')
  }

  const response = await fetch('/file', {
    method: 'POST',
    body: payload,
  })
  const result = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(result?.message || 'Profile could not be saved.')
  }

  return result
}

export const fetchProfile = async () => {
  const response = await fetch('/file')
  const result = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(result?.message || 'Profile could not be loaded.')
  }

  return result?.profile ?? null
}
