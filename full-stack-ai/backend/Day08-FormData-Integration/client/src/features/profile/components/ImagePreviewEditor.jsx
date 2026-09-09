import { RefreshCcw, RotateCw, X, ZoomIn, ZoomOut } from 'lucide-react'
import { Button } from '../../../shared/components/ui/Button'
import { getImageTransform } from '../utils/imageTransform'

const ImagePreviewEditor = ({
  preview,
  zoom,
  position,
  rotation,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onReset,
  onRemove,
  onZoomChange,
  onRotationChange,
}) => (
  <div className="preview-section">
    <Button
      className="remove-image-button"
      variant="destructive"
      title="Remove profile picture"
      aria-label="Remove profile picture"
      onClick={onRemove}
    >
      <X size={24} strokeWidth={2.4} />
    </Button>
    <div className="image-preview">
      <img
        src={preview}
        alt="Profile preview"
        className="draggable-image"
        draggable="false"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ transform: getImageTransform(zoom, position, rotation) }}
      />
    </div>
    <div className="preview-toolbar" aria-label="Image adjustment controls">
      <div className="zoom-controls">
        <Button
          variant="icon"
          title="Zoom out"
          aria-label="Zoom out"
          onClick={() => onZoomChange((current) => Math.max(1, current - 0.25))}
        >
          <ZoomOut size={26} strokeWidth={2.2} />
        </Button>
        <span>{Math.round(zoom * 100)}%</span>
        <Button
          variant="icon"
          title="Zoom in"
          aria-label="Zoom in"
          onClick={() => onZoomChange((current) => Math.min(2.5, current + 0.25))}
        >
          <ZoomIn size={26} strokeWidth={2.2} />
        </Button>
      </div>
      <div className="adjust-controls">
        <Button variant="icon" className="reset-button" title="Reset image" aria-label="Reset image" onClick={onReset}>
          <RefreshCcw size={24} strokeWidth={2.2} />
        </Button>
        <Button
          variant="icon"
          title="Rotate right"
          aria-label="Rotate right"
          onClick={() => onRotationChange((current) => current + 90)}
        >
          <RotateCw size={26} strokeWidth={2.2} />
        </Button>
      </div>
    </div>
  </div>
)

export default ImagePreviewEditor
