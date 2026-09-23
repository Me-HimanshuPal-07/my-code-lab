import { Pencil, UserRound } from 'lucide-react'
import { Badge } from '../../../shared/components/ui/Badge'
import { Button } from '../../../shared/components/ui/Button'
import { Card } from '../../../shared/components/ui/Card'
import { getImageTransform } from '../utils/imageTransform'

const ProfileCard = ({ profile, onEdit }) => (
  <Card className="profile-card">
    <div className="profile-avatar">
      {profile.image ? (
        <img
          src={profile.image}
          alt={`${profile.name}'s profile`}
          style={{ transform: getImageTransform(profile.zoom, profile.position, profile.rotation, 168 / 180) }}
        />
      ) : <UserRound className="default-profile-icon" size={72} strokeWidth={1.5} />}
    </div>
    <div className="profile-details">
      <div className="card-meta">
        <p className="card-eyebrow">Your profile</p>
        <Badge>Active</Badge>
      </div>
      <h2>{profile.name}</h2>
      <p className="profile-email">{profile.email}</p>
    </div>
    <Button variant="icon" className="card-edit-button" title="Edit profile" aria-label="Edit profile" onClick={onEdit}>
      <Pencil size={26} strokeWidth={2.2} />
    </Button>
  </Card>
)

export default ProfileCard
