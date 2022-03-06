import React from "react";

export const AuthWrapper: React.FC = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center content-center min-h-screen">
      <div className="w-full flex flex-col max-w-sm bg-white shadow-lg rounded-md">
        {children}
      </div>
    </div>
  );
};
