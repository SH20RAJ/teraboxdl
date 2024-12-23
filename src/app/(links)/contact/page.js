import { Header } from "@/components/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <PageContainer title="Contact Us">
        <Content />
      </PageContainer>
    </>
  );
}

const Content = () => {
  return (
    <div className="text-center">
      <div className="max-w-xl mx-auto">
        <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6 shadow-inner">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg">
            Email us at:{" "}
            <a 
              href="mailto:mail@terabox.tech" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              mail@terabox.tech
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
