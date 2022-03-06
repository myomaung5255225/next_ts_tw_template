import React from "react";

export const PageWrapper: React.FC = ({ children }) => {
  return (
    <div className="bg-slate-200 tracking-wide text-sm text-gray-700 min-h-screen w-full m-0 p-0">
      {children}
    </div>
  );
};
