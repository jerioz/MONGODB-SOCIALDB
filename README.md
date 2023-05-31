
PROJECT: SOCIAL NETWORK WITH MONGODB/MONGOOSE

The first thing we have to do to start a project with moongose, is to register in
https://www.mongodb.com/atlas/database

Once we have registered, we will proceed to generate our project in moongose.




## Installation

Install my project with npm.
We start the project and install the necessary dependencies.

```bash
  npm init -y
  npm install express mongoose
  npm install bcryptjs
  npm intsall jsonwebtoken
```
To avoid having to start the project all the time, we install Nodemon (dev-dependencies).

```bash
  npm install -D nodemon
```

We will modify our scripts in package.json:
"start": "nodemon index.js"

We create our connection.

```bash
  module.exports = {

MONGO_URI: 'mongodb+srv://<name>:<password>@cluster0-tuqrv.mongodb.net/test?retryWrites=true&w=majority'

}
```
Once we have completed the installation, we are ready to start the project with the following command:

```bash
  npm start
```
If everything is fine, this should appear in the console.

```bash
  > mongodb@1.0.0 start
> nodemon index.js

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
server open at port 3000
Base de datos conectada con éxito
```






## Description

In this project we have developed different endpoints to access different requests for users, posts and comments.

There are any examples:

Enpoint to create users

```bash
/users/newUser
```
Endpoint to get user login

```bash
/users/getUserLogin
```
Enpoint to attach an image to the user

```bash
/users/updateUserImg
```
Endpoint to add a comment to a post

```bash
/posts/newCommentPost
```

To create the entire database we will use Postman, that we will download it from the following site.

```bash
https://www.postman.com/downloads/
```







## Authors

- [@jerioz](https://www.github.com/jerioz)


## Badges

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
