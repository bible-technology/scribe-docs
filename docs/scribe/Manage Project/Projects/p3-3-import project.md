---
id: p3-3-import project
sidebar_label: Import Project
title: Import Project
---

**Scribe** provides users with the functionality to import [Scripture Burrito](https://docs.burrito.bible/) validated projects directly from the local devices.

**Steps to Import a Project**

- On the project page, click on the **Import** button located at the top right side
- Select a folder from local device using the dialogue box that displays
- Choose the desired folder for import and click on **Select Folder**
- The dialogue box will display project details, including the Scripture Burrito directory, Project and language name, and project type
- You will also see a message confirming the successful validation of the Burrito with the green tick mark, as Scribe only permits the import of Scripture Burrito files
- Click **Import** to proceed
- On a successful project import, a pop-up message will appear at the bottom left side, indicating that the project has been successfully imported
- If the project already exists, a verification message will appear, asking whether you want to replace the existing project file. If you wish to overwrite the file, click on **Replace**

Note: **Scribe** allows to **Import** and **Export** USFM (Unified Standard Format Markers) files and MD files. It also supports TSV resources in OBS Translation Notes


<video controls src="/assets/importbfile.mov" width="100%" type="video/mov"/>

<h2>Offline merge</h2>

Offline merge refers to the process of merging changes from one translator to another working on the same project. It allows translators to make changes and carry out merge operations on their local systems. 
This feature can be used with multiple translators. When multiple users are working on the same project conflicts may occur while merging. 
This page allows users to review conflicting changes, decide how to resolve them, and then merge them as needed.

**Steps to offline merge**

- Add the project to merge on the local device
- Log into Scribe
- Click **Import** <img src="/assets/import01.png" width="80px" alt=""/> in the top right corner of the projects page
- Choose the desired folder for import and click on **Select Folder/Open**
- The **IMPORT PROJECT** dialogue box will appear and display project details, such as Scripture Burrito directory, Project and language name, and project type
<img src="/assets/importdialoge.png" width="100%" alt=""/>
- To confirm the import, click the **IMPORT** button <img src="/assets/import03.png" width="80px" alt=""/>
- A **Replace Resource** dialogue box will open with the options to **Replace and Merge** <i>(only for OBS)</i> 
<img src="/assets/replaceandmerge01.png" width="100%" alt=""/>
- If **Replace** is chosen, the entire project is replaced by the incoming content
- If the user selects the **Merge** option
- It will process the project Merge operation
- If no conflict is found, it will take the user to the project listing page with the updated project
- If there is a conflict in the project 
- The user will be taken to the **Resolve Conflict** pane
<img src="/assets/resolve.png" width="100%" alt=""/>
- Suppose the user decides to Abort the **Resolve Conflict** action. Click the close **(x)** symbol in the top right corner. It will bring an **Abort Conflict Resolution** to pop up
<video controls src="/assets/replaceandmerge.mov" width="100%" type="video/mov"/>

<h3>Steps to Resolve Conflicts</h3>

**The Resolve Conflict page appears when a user selects the Merge option**
- A list of files with conflicts appears in the left section of the pane
<img src="/assets/resolve.png" width="100%" alt=""/>
- Individual section/para can be seen in the editor pane. <i>Conflicting ones will show with the **Ours** in red and **Theirs** in green</i>
- Select one of the options provided above the section to confirm ( <img src="/assets/alloursalltheirs.png" width="30%" alt=""/> )
   - **Ours** (already the user has in the project)
   - **Theirs** (what we get from the imported project)
   - **Both** (combines Ours and Theirs)
- If the user decides to undo the action, click Reset above the individual section

**On the upper right side, there are choices for resolving the overall conflicts for the active file (ex: 1.md, for the competing file)**
   - **All ours** (all the conflicts will be resolved with our change)
   - **All theirs** (all the conflicts will be resolved with their change)
   - **All both** (combines All ours and All theirs)
- After fixing all the conflicts the **Reset All** button will be enabled to reset the current changes to the initial state
- Once all the conflicts are resolved 
- Click the **Save** button <img src="/assets/save01.png" width="80px" alt=""/>
- In the left section of the pane, the resolved file is marked as strikethrough, indicating that it has been resolved
<img src="/assets/rrsolve.png" width="100%" alt=""/>
- Once all the conflicts have been resolved a button will appear, stating **All conflicts resolved: Finish click to finish the process**
<video controls src="/assets/conflictresolve.mov" width="100%" type="video/mov"/>


