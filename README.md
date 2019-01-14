Audio recorder app - using nodejs , react , mongodb database

The assignemnt

1. Once a session is completed a WAV file is downloded containing the recording. Upload the WAV file to a server instead of it being downloaded.

<-------------------------------------------------------------------------------------------------------------------------------------->
<----                                Uploading new audio file to server , Demo screen                                             ----->
<-------------------------------------------------------------------------------------------------------------------------------------->



![alt text](https://github.com/MyndYou/fullstack-assignment/blob/master/screenshot.png)



<-------------------------------------------------------------------------------------------------------------------------------------->
<-------------------------------------------------------------------------------------------------------------------------------------->


2. Create a webpage to display a list of all the uploaded recordings along with the recording time, creation date and an option to play it.

<-------------------------------------------------------------------------------------------------------------------------------------->
<----                                 List of all records stored in db , React Demo screen                                        ----->
<-------------------------------------------------------------------------------------------------------------------------------------->


    

![alt text](https://github.com/snirfern/audio_recorder/master/2.png)



<-------------------------------------------------------------------------------------------------------------------------------------->
<-------------------------------------------------------------------------------------------------------------------------------------->


3. Currently the app downloads multiple CSVs with data. Instead, use SocketIO to stream the data contniously the moment a recording starts. The streamed data should be console.log'd on the server.
