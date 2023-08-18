import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: Unicever",
  description: "Page not found",
};

const NotFound = () => {
  return (
    <>
      <div>
        <h1>404 - Page Not Found</h1>
      </div>
    </>
  );
};

export default NotFound;
