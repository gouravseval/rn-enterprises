import { withBoundary } from "@/components/Boundary";

// Simple cache to simulate data fetching
let data: string | null = null;
let promise: Promise<void> | null = null;

const fetchData = () => {
  if (data) return data;
  if (!promise) {
    promise = new Promise((resolve) => {
      setTimeout(() => {
        data = "Data loaded successfully after 3 seconds!";
        resolve();
      }, 3000);
    });
  }
  throw promise;
};

const DemoSuspense = () => {
  const message = fetchData();
  return (
    <div className="p-4 border rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
      <h3 className="font-bold">Suspense Demo</h3>
      <p>{message}</p>
    </div>
  );
};

export default withBoundary(DemoSuspense);
