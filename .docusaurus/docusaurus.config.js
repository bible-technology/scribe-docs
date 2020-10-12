export default {
  "title": "Autographa-docs",
  "tagline": "Documentation website for Autographa",
  "url": "https://autographa-docs.netlify.app/",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "facebook",
  "projectName": "docusaurus",
  "themeConfig": {
    "navbar": {
      "title": "Autographa",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/friendsofagape/autographa-docs",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/friendsofagape/autographa-docs"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 My Project, Inc. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/asherphilip/Documents/AG-docs/autographa-docs/sidebars.js",
          "editUrl": "https://github.com/friendsofagape/autographa-docs/edit/main/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/friendsofagape/autographa-docs/edit/main/"
        },
        "theme": {
          "customCss": "/home/asherphilip/Documents/AG-docs/autographa-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|"
};