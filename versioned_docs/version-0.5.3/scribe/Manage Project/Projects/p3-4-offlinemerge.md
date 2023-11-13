---
id: p3-4-offlinemerge
sidebar_label: Offline merge
title: Offline merge
---

Visit [Import Project](./p3-3-import%20project.md) page for more information on how to import a project.

Offline merge refers to the process of merging changes from one translator to another working on the same project. It allows translators to make changes and carry out merge operations on their local systems. 
This feature can be used with multiple translators. When multiple users are working on the same project conflicts may occur while merging. 
This page allows users to review conflicting changes, decide how to resolve them, and then merge them as needed.

### Steps to offline merge

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
<img src="/0.5.2/resolve.png" width="100%" alt=""/>
- Suppose the user decides to Abort the **Resolve Conflict** action. Click the close **(x)** symbol in the top right corner. It will bring an **Abort Conflict Resolution** to pop up
<video controls src="/0.5.2/replaceandmerge.mov" width="100%" type="video/mov"/>

### Steps to Resolve Conflicts 

**The Resolve Conflict page appears when a user selects the Merge option**
- A list of files with conflicts appears in the left section of the pane
   <img src="/0.5.2/resolve.PNG" width="100%" alt=""/>
- Individual section/para can be seen in the editor pane. <i>Conflicting ones will show with the **Original** in black and **New** in green</i>
- Select one of the options provided above the section to confirm ( <img src="/0.5.2/alloursalltheirs.PNG" width="20%" alt=""/> )
   - **Original** (already the user has in the project)
   - **New** (what we get from the imported project)
   - **Both** (combines Original and New)
- If the user decides to undo the action, click Reset above the individual section

**On the upper right side, there are choices for resolving the overall conflicts for the active file (ex: 1.md, for the competing file)**
   - **Original** (all the conflicts will be resolved with original change)
   - **New** (all the conflicts will be resolved with new change)
   - **Both** (combines Original and New)
- After fixing all the conflicts in the current file the **Reset** button will be enabled to reset the current changes to the initial state
- Once all the conflicts are resolved 
- Click the **Save** button <img src="/assets/save01.png" width="80px" alt=""/>
- In the left section of the pane, the resolved file is marked as strikethrough, indicating that it has been resolved
   <img src="/0.5.2/rrsolve.PNG" width="100%" alt=""/>
- Once all the conflicts have been resolved a button will appear, stating **Resolved**
- Click **Done** to finish the process
<video controls src="/0.5.2/conflictresolves.mov" width="100%" type="video/mov"/>


