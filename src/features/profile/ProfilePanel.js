import ProfileAction from './ProfileAction';
import ProfileInfo from './ProfileInfo';

export default function ProfilePanel() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch mx-auto px-3 space-x-4 max-w-266">
      <ProfileInfo />
      <ProfileAction />
    </div>
  );
}
