import { Header } from "@/components/Header";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <div className="container p-10 text-lg lead">
        <Content />
      </div>
    </>
  );
}

const Content = () => {
  return (
    <>

    <div>
      Contact us on mail@terabox.tech
    </div>
    </>
  );
};
