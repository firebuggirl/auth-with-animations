# Auth0 Angular Login

This sample demonstrates how to add authentication to an Angular application using Auth0's Lock widget from the hosted login page. The sample uses the Angular CLI.

## Getting Started

If you haven't already done so, [sign up](https://auth0.com) for your free Auth0 account and create a new client in the [dashboard](https://manage.auth0.com). Find the **domain** and **client ID** from the settings area and add the URL for your application to the **Allowed Callback URLs** box. If you are using the server provided by the Angular CLI, that URL is `http://localhost:4200`.

Clone the repo or download it from the Angular quickstart page in Auth0's documentation. Install the Angular CLI and the dependencies for the app.

```bash
npm install -g @angular/cli
cd 01-Login
npm install
```

## Set the Client ID and Domain

If you download the sample from the quickstart page, it will come pre-populated with the **client ID** and **domain** for your application. If you clone the repo directly from Github, rename the `auth0-variables.ts.example` file to `auth0-variables.ts` and provide the **client ID** and **domain** there. This file is located in `src/app/auth/`.

NOTE: `auth0-variables.ts` has been added to .gitignore...have to cd into file and ``
NOTE: `auth0-variables.ts` has been added to .gitignore...have to cd into file and `cat auth0-variables.ts ` to read/see variables and their values.

## Run the Application

The development server that comes with the Angular CLI can be used to serve the application.

```bash
npm start
```

The application will be served at `http://localhost:4200`.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.

## NOTE: This project uses Node.js version 8.9

    ` nvm use 8.9 ` //NVM Node version manager


## Create Angular router guard (https://angular.io/guide/router#milestone-5-route-guards):

## Enable JWT

https://github.com/auth0/angular2-jwt/tree/v1.0

https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3

` ng g guard guard/auth --module app.module `

## Easings animation/functions

http://easings.net/nb

## Heroku
` ng build `
` heroku create auth-example-with-anim `

* From existing repo:

` heroku git:remote -a auth-with-animations `

`  heroku config:add NODE_ENV=production `

`  git add . `

` git commit -m "ng build" `

` git push -u origin master `

` git push heroku master `

https://auth-example-with-anim.herokuapp.com/

# Note: Don't forget to add env variables via Heroku GUI

## Add mLab/MongoDb as add on:

` heroku addons:create mongolab `

## Get connection URI:

` heroku config:get MONGODB_URI `

## URI format Single-node plan:

` mongodb://dbuser:dbpass@host:port/dbname `


## Note:

  - To view/run auth0 locally, must switch callbackURL to localhost via `src/app/autho0-variables.ts`...file is hidden via .gitignore...cd into directory and use Vim or Atom to modify.

    - Run `npm run build` + `npm run serve`
    <!-- - visit `localhost:4200` -->

    - set `callbackURL: 'http://localhost:7777'` //ie., to run locally via `npm run serve`..after running `npm run build`

    - set back to `callbackURL:'https://auth-example-with-anim.herokuapp.com'` before running/re-deploying back to Heroku

## SNYK test for vulnerabilities:

  ` snyk test `

  - Run ` snyk wizard ` to explore remediation options

  -OR-

  - ` nsp check `


## Angular 6 + RxJS 6 Changes - Quick Fix

  - ` npm install --save rxjs@6 `

  - ` npm install --save rxjs-compat `

  - ` npm install -g @angular/cli@latest `//global install

  * Angular CLI V6 requires `Node V 8.9+` :

      - ` nvm install node --version 8.9 `

      - ` nvm use <node-version>`

      - ` npm install @angular/cli@latest `// --save??

      - ` ng update @angular/cli `//from within project directory

          - new `angular.json` file is generated replacing the old `.angular-cli.json`

      - now analyze existing project to check for outdated libraries:

          - ` ng update `

          - ` ng update @angular/core `

      - delete `node_modules` + `package-lock.json` file in your project and re-run `npm install` if facing issues after updating



## Build in Docker

    - ` docker-compose build `

## Run/Start/Stop Docker Project

    - ` docker-compose up `//from w/in project directory

    ` docker-compose down `//stop and remove containers

    ` docker-compose down --rmi all --volumes `//stop and remove images AND volumes

    ` docker-compose stop `//just stop, but don't remove anything


    ` docker-compose logs `//get all associated activity for containers linked with this docker-compose

# Note:

  - For editing locally in Docker shell change auth0 url to `localhost`, and the DB connection strings in `routes/api.js` + `data/load-sample-data.js` to `mongodb` instead of `localhost` in connection string(s)

## Editing files in Docker shell

    ` docker exec -it <container> sh `//enter container shell

    ` apt-get update `

    ` apt-get install vim `

    ` vim <file_name> `//open file via Vim/Bash

    ` i ` //insert mode

    ` :w! `//write/save

    ` :q! ` //exit/quit Vim

## Push to Docker

    ` docker login `

    ` docker tag angularnodeapp <your_dockerhub_name>/angularnodeapp `

    ` docker push <your_dockerhub_name>/angularnodeapp `
