import PostCreateToggle from './PostCreateToggle';

export default function PostContainer() {
  return (
    <div className="mx-auto py-4 max-w-152">
      <div className="mx-2 d-flex flex-column gap-3">
        <PostCreateToggle />
      </div>
    </div>
  );
}