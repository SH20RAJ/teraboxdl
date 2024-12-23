import React from "react";

export const PageContainer = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {title && (
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {title}
          </h1>
        )}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8">
          <div className="prose dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
