import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "Hero",
                label: "Hero",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subtitle",
                  },
                  {
                    type: "image",
                    name: "bgImage",
                    label: "Background Image",
                  },
                ],
              },
              {
                name: "ImageGallery",
                label: "Image Gallery",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Section Title",
                  },
                  {
                    type: "object",
                    name: "images",
                    label: "Images",
                    list: true,
                    fields: [
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                      },
                      {
                        type: "string",
                        name: "caption",
                        label: "Caption",
                      },
                    ],
                  },
                ],
              },
              {
                name: "FeatureList",
                label: "Feature List",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Section Title",
                  },
                  {
                    type: "object",
                    name: "features",
                    label: "Features List",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      // {
                      //   type: "string",
                      //   name: "icon",
                      //   label: "Icon",
                      // },
                    ],
                  },
                ],
              },
              {
                name: "ContactForm",
                label: "Contact Form",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Section Title",
                  },
                  {
                    type: "object",
                    name: "form",
                    label: "Form",
                    fields: [
                      {
                        type: "string",
                        name: "portalId",
                        label: "Hubspot Portal ID",
                      },
                      {
                        type: "string",
                        name: "formId",
                        label: "Hubspot Form ID",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
