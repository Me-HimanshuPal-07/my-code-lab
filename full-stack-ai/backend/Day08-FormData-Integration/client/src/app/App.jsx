import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Alert } from '../shared/components/ui/Alert'
import ProfileCard from '../features/profile/components/ProfileCard'
import ProfileCardSkeleton from '../features/profile/components/ProfileCardSkeleton'
import ProfileForm from '../features/profile/components/ProfileForm'
import { fetchProfile, saveProfile } from '../features/profile/services/profileApi'

const toClientProfile = (profile) => profile && ({
  name: profile.name,
  email: profile.email,
  image: profile.imageUrl,
  zoom: 1,
  position: { x: 0, y: 0 },
  rotation: 0,
})

const App = () => {
  const [profile, setProfile] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isProfileLoading, setIsProfileLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [draftValues, setDraftValues] = useState(null)
  const [preview, setPreview] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const dragStart = useRef(null)
  const imageUrls = useRef(new Set())
  const fileInput = useRef(null)

  const handleImageChange = (event) => {
    const file = event.target.files[0]

    if (!file) return

    const imageUrl = URL.createObjectURL(file)
    imageUrls.current.add(imageUrl)
    setPreview(imageUrl)
    setSelectedFile(file)
    setZoom(1)
    setPosition({ x: 0, y: 0 })
    setRotation(0)
  }

  const handleSubmit = async (values) => {
    setDraftValues(values)
    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const result = await saveProfile({
        name: values.name.trim(),
        email: values.email.trim(),
        image: selectedFile,
        removeImage: isEditing && !preview,
      })

      setProfile({
        ...toClientProfile(result.profile),
        zoom,
        position,
        rotation,
      })
      setSelectedFile(null)
      setDraftValues(null)
      setIsEditing(false)
      setSuccessMessage(isEditing ? 'Profile updated successfully.' : 'Profile created successfully.')
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = () => {
    setSuccessMessage('')
    setErrorMessage('')
    setSelectedFile(null)
    setDraftValues({ name: profile.name, email: profile.email })
    setPreview(profile.image)
    setZoom(profile.zoom)
    setPosition(profile.position)
    setRotation(profile.rotation)
    setIsEditing(true)
  }

  const handleCancelEdit = () => {
    setSuccessMessage('')
    setErrorMessage('')
    setSelectedFile(null)
    setDraftValues(null)
    setPreview(profile.image)
    setZoom(profile.zoom)
    setPosition(profile.position)
    setRotation(profile.rotation)
    setIsEditing(false)
  }

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    dragStart.current = {
      startX: event.clientX,
      startY: event.clientY,
      initialX: position.x,
      initialY: position.y,
    }
  }

  const handlePointerMove = (event) => {
    if (!dragStart.current) return

    setPosition({
      x: dragStart.current.initialX + event.clientX - dragStart.current.startX,
      y: dragStart.current.initialY + event.clientY - dragStart.current.startY,
    })
  }

  const handlePointerUp = (event) => {
    event.currentTarget.releasePointerCapture(event.pointerId)
    dragStart.current = null
  }

  const resetImage = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
    setRotation(0)
  }

  const removeImage = () => {
    setPreview(null)
    setSelectedFile(null)
    resetImage()

    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const savedProfile = await fetchProfile()
        setProfile(toClientProfile(savedProfile))
      } catch (error) {
        setErrorMessage(error.message)
      } finally {
        setIsProfileLoading(false)
      }
    }

    loadProfile()
  }, [])

  useEffect(() => {
    const urls = imageUrls.current

    return () => urls.forEach((imageUrl) => URL.revokeObjectURL(imageUrl))
  }, [])

  const showForm = !isProfileLoading && (!profile || isEditing) && !isSubmitting
  const showCard = !isProfileLoading && profile && !isEditing && !isSubmitting
  const imageChanged = !isEditing || (
    preview !== profile.image
    || zoom !== profile.zoom
    || position.x !== profile.position.x
    || position.y !== profile.position.y
    || rotation !== profile.rotation
  )

  return (
    <main className="page-shell min-h-screen">
      <div className="profile-layout mx-auto w-full">
        {showForm && (
          <ProfileForm
            isEditing={isEditing}
            isSubmitting={isSubmitting}
            profile={profile}
            initialValues={draftValues}
            preview={preview}
            zoom={zoom}
            position={position}
            rotation={rotation}
            fileInput={fileInput}
            onSubmit={handleSubmit}
            onImageChange={handleImageChange}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onResetImage={resetImage}
            onRemoveImage={removeImage}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
            onCancelEdit={handleCancelEdit}
            imageChanged={imageChanged}
          />
        )}

        {(isProfileLoading || isSubmitting) && (
          <ProfileCardSkeleton isLoading={isProfileLoading} isEditing={isEditing} />
        )}
        {showCard && <ProfileCard profile={profile} onEdit={handleEdit} />}

        {successMessage && (
          <Alert role="status">
            <CheckCircle2 size={20} />
            {successMessage}
          </Alert>
        )}

        {errorMessage && (
          <Alert className="error-alert" role="alert">
            {errorMessage}
          </Alert>
        )}
      </div>
    </main>
  )
}

export default App
