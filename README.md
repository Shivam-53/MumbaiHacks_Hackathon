﻿# MumbaiHacks_Hackathon
This is a Simple Prevention for Email Phishing.
Here whenever an unknown sender sends an email, the user can simply copy the sender's email address and paste it in the .env file of the project. After setting up the project, the user will run the API and will get the output in the console. 
The user will receive:

1)Score of the sender's email.

2)Status of the sender's email address.

3)Final result of the sender's email id.

Depending upon the score and the status, the email id is declared valid or invalid.
A general rule of thumb is, if the score is > 70, the email is verified and vice versa.


Steps to setup the API:
1) Clone the repo by the `git clone` command
2) Once cloned, initialize npm by `npm init` command
3) Next, install all the dependencies used in this API by using `npm i` command
4) Packages used are `Express`,`axios`,`dotenv`.
5) Once step 4 is completed, make a .env file and add the Hunter Api key in the file.
6) Start the server, the server will give back the score, status and the final result of the email provided.

By using this API, the user can be safe from Phishing attacks, which are one of the most common cyber attacks.

