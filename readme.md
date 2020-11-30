# authentication-fake-api




## Server

you can start the server by typing this command

```

npm start

```

  

*You can change the duration of response getting from the api. The default response time is 200 miliseconds. Make sure whatever you change the default duration, the duration must be in miliseconds. Type the command below for changing the default duration of all responses.*

```

npm start duration=5000 // e.g you can replace 5000 to whatever you want

```

---

  

## Routes

### Auth Routes

- http://localhost:8000/auth/register

- http://localhost:8000/auth/login

### Auth Routes Info

-  *The register route uses post request and returns success message. When send request to this route from the client, must add three properties inside body i.e name, email, password.*

-  *The login route uses post request and returns user object with four properties i.e id, name, email, token. When send request to this route from the client, must add two properties inside body argument i.e email, password.*

  

### Protected Routes

- http://localhost:8000/auth/me

- http://localhost:8000/auth/users

### Protected Routes Info

-  *The me route uses get request and returns user object. This route is protected means only authenticated users use this route and you'll have to add token to request header otherwise api will throw error of status code 401 means unathorized.*

-  *The users route uses get request and returns array of user object.This route is protected means only authenticated users use this route and you'll have to add token to request header otherwise api will throw error of status code 401 means unathorized.*

  

---

## Headers

### Headers allowed for accessing procted routes

- x-auth-token

OR

- authorization

#### Setting token to header

*You can use one of these headers to access protected routes. For accessing protected routes you will have to add token to one of these header and then set the headers to client request so that server extract the token and validate if token found and then parse the token information and if all these things goes correct it will send back the response otherwise it will throw error. You just have to set these headers if you want to access protected routes not for auth routes. By the way you can get the token from the login request.*

  

---

### More Info

*Last thing when you register, the user adds to the fake database and you can login through this user but keep in mind whenever you restart the server, the user will not longer exist.*

##### Default User Emails

- user1@gmail.com

- user2@gmail.com

- user3@gmail.com

##### Default User Password

*All theses accounts have same password i.e password*