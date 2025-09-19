---
id: p5-3-pdfgenerator
sidebar_label: PDF Generator
title: PDF Generator
---

# PDF generator

The PDF generator is available in BT, OBS and Juxta modes.

## Current limitations
- Close the export pane will reset its parameters. If you want to try different settings, be sure to keep the pane open between prints
- The **Reset** button <img src="/0.7.0/Reset.png"  width="50px" alt="reset.png"/> has a specific effect: it will only reset modified input fields **below a Print type** field (they appear once a Print type is selected)
- For **Translation** content (BT, Juxta), the **Book selection** has a toggle on/off behavior <img src="/0.7.0/Bookselection.png"  width="500px" alt="bookselection"/>
- Right to Left (RTL) languages are not supported

## Steps to use the PDF generator
### Default mode

Default mode prints the current opened Scribe project, with one layout.

- Click the **Print** button <img src="/0.7.0/Print.png"  width="50px" alt="print"/> on the top right corner of the screen

- An export pane will open
- Edit general settings as needed (**Paper size**, **Font**, **Font size**)
- The **Content** added below those general settings depend on the project from which you launched the PDF generator:
  - A **Translation** block for BT and Juxta projects
  - An **OBS** block for OBS projects
- In both cases, select a print range:
  - Translation: which books to print (**All Books**, **Old Testament**, **New Testament**, **Custom**)
  - OBS: which stories to print (the number of the **obs start**, and the **obs end**)

- **Print type** available options vary depending on the content block type (Translation, OBS), select a **Print type** option
- Each Print type has specific settings, they appear below it once a Print type is selected. Most of these settings are optional
- **Choose an export folder** with the corresponding button
- You can name your file in the **your file name here** field, or it will be named randomly
- Click the **Print** button
- If a mandatory field is empty or is wrongly filled, an error appear on the right side of the export pane to help locate the error
- Without errors, generation steps appear on the right side of the export pane, wait for the **Successful pdf generation** final message

### Advanced mode
**Advance mode** may be used to generate a single PDF containing many different projects with many different layouts, as well as introductions and imported PDFs. It is also more technical to configure.
- With **Advanced mode** active, three new options are available:
  - The automatically added project (the one currently opened in Scribe) can be modified with the **Select** button <img src="/0.7.0/Select.png"  width="50px" alt="select"/>, on the right of the project name
  - A new content block can be added with the **Add** button <img src="/0.7.0/Addblock.png"  width="70px" alt="addblock"/>
    - Content will be printed by order of appearance in the export pane
    - Once two or more content blocks are listed, they can be deleted with the **Trash** button <img src="/0.7.0/Trash.png"  width="40px" alt="trash"/>
  - **Loop mode** can be used; when active, one new option is available:
    - Inside a content block, a new project can be added with the **Add** button <img src="/0.7.0/Addproject.png"  width="50px" alt="addproject"/>
      - Content will be printed by order of appearance in the content block, **for each book or story selected** (so in loop)
      - Once two or more projects are listed inside a content block, they can be deleted with the **Trash** button  <img src="/0.7.0/Trash.png"  width="40px" alt="trash"/>