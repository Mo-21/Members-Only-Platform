# Members Only Clubhouse

Members Only Clubhouse is a web application that provides a platform for members to write and read anonymous posts. Inside the clubhouse, members can see the author of a post, but outside viewers can only see the story and wonder who wrote it. This project uses Passport (local strategy) for authentication and Bcrypt for password hashing. The members are asked to provide invitation key once signed up, which is required, then transferred to another page asking for admin password, which is not required and there is a link to proceed to the main page.

![Homepage](public/images/main.png)
![anonymous homepage page](public/images/main-no-sign-in.png)
![Sign in page](public/images/sign-in-page.png)

## Features

- User authentication using Passport.js
- Anonymous post creation and viewing
- User-friendly interface for reading and writing posts
- Password hashing using Bcrypt for enhanced security
- Ability to delete posts by admins only.

## Technologies Used

- Node.js
- Express
- Passport.js
- Bcrypt
- MongoDB
- Pug
- Bootstrap

Happy anonymous posting!
