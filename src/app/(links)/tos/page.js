import { Header } from "@/components/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <PageContainer title="Terms and Conditions">
        <Content />
      </PageContainer>
    </>
  );
}

const Content = () => {
  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <p className="text-lg leading-relaxed">
          Welcome to Terabox.tech! These terms and conditions outline the rules and regulations for the use of our Website.
        </p>
        <div>
          <div>
            <p>
              <strong>Terms and Conditions</strong>
            </p>
            <p>Welcome to Terabox.tech!</p>
            <p>
              These terms and conditions outline the rules and regulations for the
              use of Terabox.tech's Website, located at{" "}
              <a href="https://Terabox.tech">https://Terabox.tech</a>.
            </p>
            <p>
              By accessing this website, we assume you accept these terms and
              conditions. Do not continue to use Terabox.tech if you do not agree
              to all of the terms and conditions stated on this page.
            </p>
            <p>
              <strong>Cookies</strong>
            </p>
            <p>
              We employ the use of cookies. By accessing Terabox.tech, you agreed
              to use cookies in agreement with Terabox.tech's Privacy Policy.
            </p>
            <p>
              <strong>License</strong>
            </p>
            <p>
              Unless otherwise stated, Terabox.tech and/or its licensors own the
              intellectual property rights for all material on Terabox.tech. All
              intellectual property rights are reserved. You may access this from
              Terabox.tech for your own personal use subjected to restrictions set
              in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from Terabox.tech</li>
              <li>Sell, rent, or sub-license material from Terabox.tech</li>
              <li>Reproduce, duplicate or copy material from Terabox.tech</li>
              <li>Redistribute content from Terabox.tech</li>
            </ul>
            <p>
              <strong>Comments</strong>
            </p>
            <p>
              Parts of this website offer users the opportunity to post and
              exchange opinions and information in certain areas of the website.
              Terabox.tech does not filter, edit, publish, or review Comments
              prior to their presence on the website. Comments do not reflect the
              views and opinions of Terabox.tech, its agents, and/or affiliates.
              Comments reflect the views and opinions of the person who posts
              them. To the extent permitted by applicable laws, Terabox.tech shall
              not be liable for the Comments or for any liability, damages, or
              expenses caused and/or suffered as a result of any use of and/or
              posting of and/or appearance of the Comments on this website.
            </p>
            <p>
              Terabox.tech reserves the right to monitor all Comments and to
              remove any Comments that can be considered inappropriate, offensive,
              or cause a breach of these Terms and Conditions.
            </p>
            <p>
              <strong>Hyperlinking to our Content</strong>
            </p>
            <p>
              The following organizations may link to our Website without prior
              written approval:
            </p>
            <ul>
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>
                Online directory distributors may link to our Website in the same
                manner as they hyperlink to the Websites of other listed
                businesses; and
              </li>
              <li>
                System-wide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Website.
              </li>
            </ul>
            <p>
              These organizations may link to our home page, to publications, or
              to other Website information so long as the link: (a) is not in any
              way deceptive; (b) does not falsely imply sponsorship, endorsement,
              or approval of the linking party and its products and/or services;
              and (c) fits within the context of the linking party's site.
            </p>
            <p>
              <strong>Content Liability</strong>
            </p>
            <p>
              We shall not be held responsible for any content that appears on
              your Website. You agree to protect and defend us against all claims
              arising on your Website. No link(s) should appear on any Website
              that may be interpreted as libelous, obscene, or criminal, or which
              infringes, otherwise violates, or advocates the infringement or
              other violation of, any third party rights.
            </p>
            <p>
              <strong>Reservation of Rights</strong>
            </p>
            <p>
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right to
              amend these terms and conditions and its linking policy at any time.
              By continuously linking to our Website, you agree to be bound to and
              follow these linking terms and conditions.
            </p>
            <p>
              <strong>Removal of links from our website</strong>
            </p>
            <p>
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us at any moment. We will
              consider requests to remove links, but we are not obligated to do so
              or to respond to you directly.
            </p>
            <p>
              We do not ensure that the information on this website is correct; we
              do not warrant its completeness or accuracy; nor do we promise to
              ensure that the website remains available or that the material on
              the website is kept up to date.
            </p>
            <p>
              <strong>Disclaimer</strong>
            </p>
            <p>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties, and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul>
              <li>
                limit or exclude our or your liability for death or personal
                injury;
              </li>
              <li>
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </li>
              <li>
                exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </ul>
            <p>
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort, and
              for breach of statutory duty.
            </p>
            <p>
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>
          </div>
        </div>
      </section>
      
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This website is not an official Terabox website and we are not associated with terabox.app or Flextech Inc.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 - Present Terabox.tech All rights reserved.
        </p>
      </div>
    </div>
  );
};
