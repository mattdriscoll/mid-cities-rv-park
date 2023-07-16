"use client";

import Script from "next/script";
import { useState } from "react";
import SectionContainer from "./SectionContainer";

const ContactForm = () => {
  const [hbsptScriptLoaded, setHbsptScriptLoaded] = useState(false);

  const hbsptFormsCreate = `
    hbspt.forms.create({
      region: \"na1\",
      portalId: "40361000",
      formId: "ebda533e-d7a0-4fea-bdab-d1e0caf62da6"
    });
  `;

  return (
    <section
      data-section="contact"
      id="contact"
      className="bg-mcrv-white text-mcrv-black py-12 md:py-14 lg:py-16"
    >
      <SectionContainer>
        <h2 className="text-2xl font-bold text-center mb-12 lg:mb-16">
          Contact Us
        </h2>

        <div className="flex flex-col items-center">
          <div className="w-full md:w-10/12 lg:w-8/12">
            <Script
              src="//js.hsforms.net/forms/embed/v2.js"
              onReady={() => setHbsptScriptLoaded((val) => !val)}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: hbsptScriptLoaded ? hbsptFormsCreate : "",
              }}
            />
          </div>
        </div>

        {/* <script>{hbsptFormsCreate}</script> */}
      </SectionContainer>
    </section>
  );
};

export default ContactForm;
