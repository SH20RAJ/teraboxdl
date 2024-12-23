import { Header } from "@/components/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <PageContainer title="DMCA Policy">
        <Content />
      </PageContainer>
    </>
  );
}

const Content = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-lg leading-relaxed">
          Welcome to our DMCA Policy page. Here, we outline our procedures for reporting copyright violations and handling repeat infringements.
        </p>
        <p>
          <strong>DMCA Policy</strong>
        </p>
        <p>
          Welcome to teradownloader.com's DMCA Policy page. Here, we outline our
          procedures for reporting copyright violations and handling repeat
          infringements.
        </p>
        <p>
          <strong>Reporting Copyright Infringement Claims:</strong>
        </p>
        <p>
          To report unauthorized use of your copyrighted work, email our
          designated DMCA Agent at mail.teradownloader@gmail.com with:
        </p>
        <ul>
          <li>Your valid physical or electronic signature</li>
          <li>Identification of the copyrighted work</li>
          <li>
            Details of the infringing material and its location on our website
          </li>
          <li>Your contact information</li>
          <li>A statement of good faith belief that the use is unauthorized</li>
          <li>
            A statement confirming the accuracy of the information and your
            authorization to act on behalf of the copyright owner
          </li>
        </ul>
        <p>
          <strong>Repeat Infringer Policy:</strong>
        </p>
        <p>
          We strictly adhere to DMCA regulations and will terminate the access
          of repeat infringers to our website.
        </p>
        <p>
          <strong>Changes to the DMCA Policy:</strong>
        </p>
        <p>
          This policy may be updated periodically. Check back regularly for
          revisions.
        </p>
        <p>
          <strong>Contact Us:</strong>
        </p>
        <p>For questions about this DMCA Policy, please contact us.</p>
        <hr />
        <p>
          This website is not an official Terabox website and we are not
          associated with terabox.app or Flextech Inc.
        </p>
        <p>© 2024 - Present TeraDownloader.com All rights reserved.</p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-4">Contact Our DMCA Agent</h3>
        <p className="text-blue-600 dark:text-blue-400">
          mail.teradownloader@gmail.com
        </p>
      </div>
    </div>
  );
};
