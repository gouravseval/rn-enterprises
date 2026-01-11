import { withBoundary } from "@/components/Boundary";

const DemoError = () => {
  // This component intentionally throws an error to demonstrate the Error Boundary
  throw new Error("This is a demo error!");
  return <div>This will never render</div>;
};

export default withBoundary(DemoError);
