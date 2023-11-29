import { ShimmerSocialPost } from "react-shimmer-effects";
const BlogLoading = () => {
  return (
    <div>
      <ShimmerSocialPost type="image" />
      <ShimmerSocialPost type="both" />
      <ShimmerSocialPost type="text" />
      <ShimmerSocialPost type="text" title />
    </div>
  );
};
export default BlogLoading;
