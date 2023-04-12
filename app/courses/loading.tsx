import Skeleton from 'react-loading-skeleton';

function Loading() {
  return (
    <div>
      <Skeleton count={10} />
    </div>
  );
}

export default Loading;
