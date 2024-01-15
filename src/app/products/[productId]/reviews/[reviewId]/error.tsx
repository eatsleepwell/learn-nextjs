"use client";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      <button onClick={reset}>reload</button>
      <h1 className="text-red-500">{error.message}</h1>
    </div>
  );
};

export default ErrorBoundary;
