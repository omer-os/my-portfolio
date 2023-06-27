import React from "react";

export default function template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <>{children}</>
    </div>
  );
}
