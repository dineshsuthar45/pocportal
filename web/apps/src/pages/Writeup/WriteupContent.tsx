import { useWriteupContent } from "./Writeup.hooks";

const WriteupContent = () => {
  const { isLoadingDetails, details } = useWriteupContent();
  console.log({ isLoadingDetails, details });
  return <div>WriteupContent</div>;
};

export default WriteupContent;
