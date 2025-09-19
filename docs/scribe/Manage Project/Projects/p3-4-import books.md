---
id: p3-4-importbooks
sidebar_label: Import Books
title: Import Books
---

### Import Books ###

Users can import books into a project in **USFM format** (.usfm or .sfm). This feature allows translators to seamlessly integrate externally prepared or updated book files into an existing and new project. 

## Create a Project and import books ##

Steps to [create a new project](../../Manage%20Project/Create%20a%20Project/p2-1-new%20project.md)

- Click **Create Project**. 
- Click on **Import Books** 
- Select the books to import 
- Click **Create Project** to finalize. 
 
## Import Books into an Existing Project ##

- Open the **Project List**.
- Select the project where you want to import books.
- Click on the **three dots menu (⋮)** next to the project.
- Choose **Edit Project**.
- In the **edit window**, click **Import Books**.
- Select valid USFM files (.usfm / .sfm) that are within the project scope from your local device.
- Click **Import**.
- If the selected books already exist:
  - Click **Overwrite** to replace them, or
  - Click **Cancel** to keep the existing books.
- Verify that the books are imported and the project scope is updated.
- Click **Save** to confirm changes.

<video controls src="/1.0.0/en_importbooks.mp4" width="100%" type="video/mov"/>

## Color Codes for Imported Books ##

After clicking Import, the system validates each selected file and assigns a color code to indicate its status: 

1. **<img src="/1.0.0/red.png" width="15px" alt=""/> Red** – **Invalid File:** File is corrupted, empty, or not in the required USFM format; it cannot be imported. 
2. **<img src="/1.0.0/grey.png" width="15px" alt=""/> Grey** – **Out of Scope:** File does not belong to the selected project scope.
3. **<img src="/1.0.0/green.png" width="15px" alt=""/> Green** – **Valid Book:** File is within scope and can be imported successfully.
4. **<img src="/1.0.0/blue.png" width="15px" alt=""/> Blue** – **Duplicate Detected:** The book has been selected more than once or is already included in the batch and cannot be re-imported.

This color-coding system helps users quickly identify files that are ready for import, need action, or cannot be processed. 

<img src="/1.0.0/en_importbook.png" width="1000px" alt=""/> 
