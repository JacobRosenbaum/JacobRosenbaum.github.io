# Welcome to my Note Taker!

### Deployed Link 
(Will not be fully functional, as Github does not handle Node and Express)
https://jacobrosenbaum.github.io/homework11/public/index.html

### Functionality

This app allows the user to write down notes (with a title and body) and save them. The user also has the ability to delete the notes. 
When the user clicks the save button, the title and body of the note is saved on a back-end server as JSON, then stringified and appended onto the site. 
Since it goes through the back-end server, the notes will still be there when you refresh the page. When the user clicks the delete button, the server reads the current JSON, finds the deleted note's ID, then removes that note from the JSON database, and finally re-appends the notes back onto the page.

### Technology

This app was developed using VS Code. The languages used were HTML, CSS, JavaScript/JQuery, Node, and Express. 

### Demo 

https://drive.google.com/file/d/1qWGwzCJiPChKpl6sWNFzi_AB8CVQb7Cr/view 
