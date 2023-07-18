"use client";

import Script from "next/script";
import { useState } from "react";
import SectionContainer from "./SectionContainer";

interface ContactFormProps {
  title: string;
  form: {
    portalId: string;
    formId: string;
  };
}

const ContactForm = ({ title, form }: ContactFormProps) => {
  const { portalId, formId } = form;
  const [hbsptScriptLoaded, setHbsptScriptLoaded] = useState(false);

  const hbsptFormsCreate = `
    hbspt.forms.create({
      region: \"na1\",
      portalId: \"${portalId}\",
      formId: \"${formId}\"
    });
  `;

  return (
    <section
      data-section="contact"
      id="contact"
      className="bg-mcrv-white text-mcrv-black py-12 md:py-14 lg:py-16"
    >
      <SectionContainer>
        <h2 className="text-center mb-12 lg:mb-16">{title}</h2>

        <div className="flex flex-col items-center">
          <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12">
            <Script
              src="//js.hsforms.net/forms/embed/v2.js"
              onReady={() => setHbsptScriptLoaded((isLoaded) => !isLoaded)}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: hbsptScriptLoaded ? hbsptFormsCreate : "",
              }}
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default ContactForm;
