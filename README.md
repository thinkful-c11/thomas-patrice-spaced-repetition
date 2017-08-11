# How Do I Vim?

Have you ever wanted to use the vim text editor but no idea how? This is the app
for you. Using space repetition it will teach you all the commands you will need
to know to easily maneuver through the editor.

## Technology Used

**FrontEnd**: CSS, JavaScript, React, Redux
**BackEnd**: NodeJs, Express, MongoDB, Mongoose, Mlab
**Deployment**: Heroku

## Documentation of API

**GET** http://young-castle-67864.herokuapp.com/api/auth/logout
This allows you to logout out of our app with google oAuth
**GET** http://young-castle-67864.herokuapp.com/api/me
This allows you to see who is using the app but, is restricted due to google oAuth
**GET** http://young-castle-67864.herokuapp.com/api/questions
This allows you to see the list of questions but, is restricted due to google oAuth

## Run locally

```sh
$ git clone https://github.com/thinkful-c11/thomas-patrice-spaced-repetition.git
```

```sh
$ cd thomas-patrice-spaced-repetition
```

```sh
$ npm install
```

```sh
$ npm run dev
```

* You will need to get google OAuth credentials.
* You should get a Client ID and Secret.
* Back in your project locally, create an `secret.js` file in the `/server` directory:
(Use the client ID and secret we just got from Google)

```js
module.exports = {
  CLIENT_ID: 'yourId123.apps.googleusercontent.com',
  CLIENT_SECRET: 'yoursecret'
}
```

* You will also need to have a local mongo server

## Screenshots
