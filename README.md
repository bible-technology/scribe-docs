# Scribe Doc

Documentation website for Sribe

### Document Structure

Every document has a unique id. By default, a document id is the name of the document (without the extension) relative to the root docs directory. However, the **last part** of the `id` can be defined by the user in the front matter. 

```
scribe-docs # Root directory
└── docs
    └── scribe
        ├──about-this-guide
        ├──getting-started
          └── what-is-scribe.md
        └── hello.md
```

### Creating a Doc Page

Create a Markdown file, `new_doc_page.md`, and place it under the `docs` directory. If there is a category with multiple pages, create a directory and add all the pages to that. 

At the top of the file, specify the unique id `id` , document title `title`  and title for the doc on the side bar `sidebar_label` in the front matter.

```
---
id: new_page
title: document title
sidebar_label: label for the doc on the left pane.
---

Lorem ipsum


```

Add the page to the sidebars.js as below. The `id` and `sidebar_label` is used to create the structure of the site. 

```
module.exports = {
  scribe: [
   // Normal syntax
    {
      type: 'category',
      label: 'categorylable',
      items: [
        '/new_page',
      ],
    },
   // Short Hand syntax
   { "category lable":[sidebar items]},
  ],
};
```

to add a page without a category set the type as doc and use the document id.

```
module.exports = {
  scribe: [
    {
  	  type: 'doc',
      label: 'sidebar label',
      id: '/document_id',
    }
  ],
};
```



### Adding assets

Add images and other assets to a directory in the `static/assets` and add them in the document in with <img> syntax with absolute paths. 

```
<img src="/assets/path/image.png" width="100%" />
```

### 
