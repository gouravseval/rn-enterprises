import { Component, type ReactNode, Suspense } from "react";

// ---- ErrorBoundary ----
class Boundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-200 text-red-800 rounded">
          Component crashed. Please refresh.
        </div>
      );
    }

    return this.props.children;
  }
}

// ---- Suspense Loader ----
const Loader = () => (
  <div className="p-4 text-center">Loading component...</div>
);

// ---- Central Wrapper HOC ----
export function withBoundary(Component: React.FC | any) {
  return function Wrapped(props: any) {
    return (
      <Boundary>
        <Suspense fallback={<Loader />}>
          <Component {...props} />
        </Suspense>
      </Boundary>
    );
  };
}
