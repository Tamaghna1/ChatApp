How to run the chat app?
  1. Upload both the folders,backend and frontend, in visual studio code.
  2. Run terminal in the folder backend after ensuring the path location to be backend.If its not set predefined,use "cd backend".
  3. Type "npm run start" in the terminal.
  4. Now,Run terminal in the folder frontend
  5. If npm is already installed,ignore this step,or,Type "npm run install".
  6. After the installation of the npm modules,Type "npm run dev".
  7. Click on the url in the terminal section.

Explanation of the chat app

1.The database of my chatapp is hosted on https://chatengine.io .The free version chat engine allows at maximum of 10 users at a time.For registration ,users need to type their username in the authentication page.

2.If the user has previously registered in my chat app,no new account is created for that particular user and they are signed in with their account.In order to chat,click on the "+" icon on the left and create a chat name.

3.For adding members in the chat,click on the drop down button beside the members section in the right,click the tab below and select the members to be added.This is the group chat feature.

4.This is a realtime chat application with updates after every message



Dependencies used-
The dependencies used are Axions,Cors and Express.
Axios is a popular JavaScript library for making HTTP requests from the browser or Node.js. It provides a simple and elegant API for sending asynchronous requests to a server and handling responses

CORS is a security feature implemented by web browsers to control how web pages in one domain can request and access resources (e.g., data, images, fonts) from another domain. It's a security mechanism to prevent unauthorized cross-origin requests.

Express.js is a web application framework for Node.js that simplifies the process of building robust and scalable web applications and APIs.

