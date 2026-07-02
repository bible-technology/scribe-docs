---
id: p9-1-Videorecording
sidebar_label: Video Recording
title: Video Recording
---
The Video Flavour enables users to record and organize verse-based video projects directly in the editor.

### Creating a New Video Project 
- Click the **New** button to start a new project. 
- In the New Project page, open the drop-down menu to select the project’s Flavour. 
- Choose **Video** from the list and create the project. 
- On the New project page, enter the below listed information. 
  - Project Name 
  - Project Description 
  - Abbreviation (It will be auto-generated on entering project name. The user has the option to edit the auto-generated abbreviation) 
 - Target Language 
- After entering the required details, click on **Create Project**. Once a project is created, it will appear as a new item on the PROJECTS page 
- Advance settings (to know more about Advanced settings refer **[Advanced Settings](../../Manage%20Project/Create%20a%20Project/p2-2-advanced%20settings.md)** page)

**To set the scope for the project refer  [Scope Management](../../Manage%20Project/Projects/p3-8-scope%20management.md)**
 <video controls src="/1.1.0/en_createvideoproject.mp4" width="100%" type="video/mov"/>

## Editor Layout 
When the user opens a project with the Video Flavour, the editor loads showing the verses along with video-recording buttons.

### Recording a Video 
- Click the **Camera** icon beside the verse you want to record. 
- A Video Recording Window will appear. 
- Ensure the **Camera** and microphone are properly connected. 
- Click the **camera settings** icon to select your preferred camera.
- When ready: 
  - Click the **Camera** button to start recording. 
  - Click the **Microphone icon** to **enable** or **disable** the  audio.The user has an option to record with and without audio 
- Once finished, click the **Stop** button. 
- After recording, the video will automatically **save** and video is visible in the  respective verse.
- Use the **Previous Verse(<)** or **Next Verse (>)** buttons to move between verses.
- Preview your video and retake if needed after deleting the existing video   
 <video controls src="/1.2.0/en_videorecording.mp4" width="100%" type="video/mov"/>

### Re-recording 
To re-record, Delete the existing video  and click on the camera button and start recording. 

### Joining Verses 
- **Right click** on any verse 
- You will see an option to **join with the previous verse** 
- Click this option to link two consecutive verses together. 
- Once verses are linked, they will be treated as a **single unit** for video recording. 
- When linking is performed, any previously recorded videos for those verses will be deleted - automatically, allowing the user to **re-record** a combined video. 
- There is also an option to **Disjoin** the verses if you want to separate them again. 
- After **Disjoining**, you can record videos for each verse individually. 
<video controls src="/1.1.0/en_joiningverses.mp4" width="100%" type="video/mov"/>

# Video Comments

The **Video Comments** feature allows users to provide feedback on recorded verses using either **Text** or **Video** comments. Comments are displayed with the author's username and timestamp, making it easy to collaborate and review recordings.

### Adding a Comment
1. Select a verse and record a video, or click an existing recorded verse.
2. Open the **comments** using one of the following methods
     - Right-click the recorded verse and select **Comments**.
     - Click **Open comments** from video modal
 

### Add a Text Comment

1. Click the **Text Comment** icon.
2. Enter your comment in the text field.
3. Click the **Save** icon.
4. Repeat these steps to add additional text comments.

The text comment is saved and displayed in the Comments panel along with the author's username and timestamp.

### Edit a Text Comment

1. Open the **Comments** panel.
2. Click the **Edit** icon on the comment.
3. Modify the comment text as needed.
4. Click the **Save** icon.

The updated text comment is saved and displayed in the Comments panel.
 <video controls src="/1.2.0/en_textcomments.mp4" width="100%" type="video/mov"/>

### Add a Video Comment

1. Click the **Video Comment** icon.
2. Record your video comment.
3. Click the **Stop** icon to end the recording.
4. Repeat these steps to add additional video comments.

The video comment is saved and displayed in the comments panel along with the author's username and timestamp. 
Users can view a saved video comment by clicking the Play button on the recorded video comment. .

### Re-record or Delete a Video Comment

1. Open the **Comments** panel.
2. Do one of the following:
   - Click **Delete** to remove the existing video comment. Then click **Record** to create a new video comment.
   - Click **Re-record** to replace the current video comment.
3. Record your video comment.
4. Click **Stop** when you have finished recording.

The new video comment is automatically saved.
<video controls src="/1.2.0/en_videocomments.mp4" width="100%" type="video/mov"/>

## Join and Disjoin Comments
### Joined Verses
- When verses are joined, their associated comments are also joined.
- Users can continue adding comments to the joined verse.

### Disjoined Verses
- When a joined verse is disjoined, the associated comments are separated.
- Comments from the joined verse are distributed among the resulting verses.
- Users can continue adding comments to the disjoined verses.

<video controls src="/1.2.0/en_joinedversecomments.mp4" width="100%" type="video/mov"/>

## Import a Video for a Verse

You can import an existing video file and associate it with a verse.

1. Select the desired verse.
2. Click the **Record** button for the verse.
3. In the media player, click **Import**.
4. Browse and select the video file to import.
   - **Supported format:** `.webm`
5. Click **Select**.

The selected video is imported and attached to the verse.

## Replace an Existing Video

If a verse already has an associated video, you can replace it with another video.

1. Open a verse that already contains a video recording.
2. Click the existing recording to open the media player.
3. Click **Import**.
4. When prompted, click **Replace** to confirm
5. Browse and select the new video file.
6. Click **Select**.


The existing video is replaced with the newly selected video.

:::note

Replacing a video permanently overwrites the currently associated video for the verse. Ensure you have selected the correct file before confirming the replacement.
:::
<video controls src="/1.2.0/en_importvideoforverse.mp4" width="100%" type="video/mov"/>

# Project Export Options 
### Steps to Export a Project 
- Choose a project to **Export** on the Project Page 
- Click the **downward pointing arrow** to see a dropdown menu with the project description 
- Click on the **three dots** menu with options 
   - Edit 
   - Export 
   - Archive 
   - Scope Management
- Select **Export** to export the project to a local device 
- A dialog box will be displayed, enter the desired file path 
- Click **Export**, Export modal window opens with options: 
   - **1. Default Export(Recommended)** 
   - **2. Export for External Use** 

### 1.Default Export 
- Joined verses do NOT appear in the **USFM** file. 
- Joined verse information is stored in the **export** data file. 
- This export type **can be imported** back into **Scribe**. 
- After importing the project back, users can **disjoin** previously joined verses.
<video controls src="/1.1.0/en_videoexport.mp4" width="100%" type="video/mov"/> 

### 2.Export for External Use 
- Joined verses are visible in the **USFM** file. 
- This export is intended for external/third-party use. 
- This export type is not recommended for importing into Scribe. 
- Since it cannot be imported, users **cannot disjoin** joined verses after export. 

**Steps to Import a Project [Import Project](../../Manage%20Project/Projects/p3-3-import%20project.md)**

### Importing a Default Export 
The project can be successfully imported back into Scribe, and the user can modify or disjoin the joined verses after import. 

### Importing an External Use Export 
- Any project exported using Export for external use cannot be imported back. 
- Joined verses in the USFM file remain permanent since re-import is not allowed

 

