import Avatar from '../../components/Avatar';
import AvatarGroup from '../../components/AvatarGroup';

export default function ProfileInfo() {
  return (
    <>
      <div className="-mt-20 -mt-md-10 z-10">
        <Avatar src={null} size="168" borderSize="4" borderColor="white" />
      </div>
      <div className="my-3 flex-grow-1 d-flex flex-column align-items-center d-md-block">
        <h2 className="fw-bold mb-0">Lnw aRm</h2>
        <span className="d-inline-block text-muted py-1">10 Friends</span>
        <AvatarGroup />
      </div>
    </>
  );
}
