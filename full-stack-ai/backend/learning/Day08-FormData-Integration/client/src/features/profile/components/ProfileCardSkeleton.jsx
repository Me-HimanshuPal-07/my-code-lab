import { LoaderCircle } from 'lucide-react'
import { Card } from '../../../shared/components/ui/Card'
import { Skeleton } from '../../../shared/components/ui/Skeleton'

const ProfileCardSkeleton = ({ isLoading, isEditing }) => (
  <div
    className="skeleton-state w-full"
    role="status"
    aria-label={isLoading ? 'Loading profile' : isEditing ? 'Updating profile' : 'Creating profile'}
  >
    <div className="skeleton-status">
      <LoaderCircle className="loading-icon" size={18} />
      <span>{isLoading ? 'Loading profile...' : isEditing ? 'Updating profile...' : 'Creating profile...'}</span>
    </div>
    <Card className="profile-card profile-card-skeleton">
      <Skeleton className="skeleton-avatar" />
      <div className="skeleton-details">
        <Skeleton className="skeleton-line skeleton-label" />
        <Skeleton className="skeleton-line skeleton-name" />
        <Skeleton className="skeleton-line skeleton-email" />
      </div>
      <Skeleton className="skeleton-edit-button" />
    </Card>
  </div>
)

export default ProfileCardSkeleton
