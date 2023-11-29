import { ShimmerContentBlock } from "react-shimmer-effects";
const EventLoading = () => {
  return (
    <>
      <div className="col-lg-6">
        <ShimmerContentBlock
          title
          text
          cta
          thumbnailWidth={370}
          thumbnailHeight={100}
        />
        <ShimmerContentBlock
          title
          text
          cta
          thumbnailWidth={370}
          thumbnailHeight={100}
        />
      </div>
      <div className="col-lg-6">
        <ShimmerContentBlock
          title
          text
          cta
          thumbnailWidth={370}
          thumbnailHeight={100}
        />
        <ShimmerContentBlock
          title
          text
          cta
          thumbnailWidth={370}
          thumbnailHeight={100}
        />
      </div>
    </>
  );
};
export default EventLoading;
