import { ShimmerSimpleGallery } from "react-shimmer-effects";
const MemberLoading = () => {
  return (
    <section className="page-content">
      <div className="container">
        <div className="teachers-section p-0">
          <div className="teachers">
            <div className="row">
              <ShimmerSimpleGallery
                card
                imageHeight={405}
                imageWidth={270}
                caption
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberLoading;
