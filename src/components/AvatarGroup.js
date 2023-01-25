import Avatar from './Avatar';

export default function AvatarGroup() {
  return (
    <div>
      <a href="/">
        <span className="">
          <Avatar src={null} size="32" borderColor="white" borderSize="2" />
        </span>
      </a>
      <a href="/">
        <span className="-ms-2">
          <Avatar src={null} size="32" borderColor="white" borderSize="2" />
        </span>
      </a>
      <a href="/">
        <span className="-ms-2">
          <Avatar src={null} size="32" borderColor="white" borderSize="2" />
        </span>
      </a>
    </div>
  );
}
