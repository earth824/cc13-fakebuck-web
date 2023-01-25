import { useParams } from 'react-router-dom';
import ProfileCover from './ProfileCover';
import ProfilePanel from './ProfilePanel';

export default function ProfileContainer() {
  const { userId } = useParams();
  console.log(userId);
  return (
    <div
      className="shadow-sm pb-2"
      style={{ backgroundImage: 'linear-gradient(#f0f2f5, #fff)' }}
    >
      <ProfileCover />
      <ProfilePanel />
    </div>
  );
}
