export const getImageTransform = (imageZoom, imagePosition, imageRotation, sizeRatio = 1) => (
  `translate(${imagePosition.x * sizeRatio}px, ${imagePosition.y * sizeRatio}px) scale(${imageZoom}) rotate(${imageRotation}deg)`
)
