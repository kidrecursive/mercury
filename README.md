<!--- STARTEXCLUDE --->
# Mercury
*60 minutes, Advanced, [Start Building](https://github.com/DataStax-Examples/mercury/blob/master/README.md#quick-start)*

A horizontally scaling productivity app that leverages Astra DB and Astra Streaming.
<!--- ENDEXCLUDE --->

![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-sample-app-default.png)

## Quick Start
<!--- STARTEXCLUDE --->
* [Signup for DataStax Astra](https://dtsx.io/3BVty8T), or login to your already existing account. 
* [Create an Astra DB Database](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db) if you don't already have one.
<!--- ENDEXCLUDE --->
* [Create an Astra DB Keyspace](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db-keyspace) called `sag_mercury` in your database.
* [Generate an Application Token](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-application-token) with the role of `Database Administrator` for the Organization that your Astra DB is in.
* Click the 'Open in Gitpod' link: [![Open in IDE](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Examples/astra-nodejs-starter)
* Once the app is finished launching in the Gitpod IDE, copy the `env.example` file to a file named `.env` and fill the required values in from your Application Token and [Astra DB connection settings](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#get-your-astra-db-connection-settings).
* [Register your app](https://docs.github.com/en/rest/guides/basics-of-authentication) on your Github account and add its Client ID and Client Secret to the `.env` file. 
* Get your [secure connect bundle](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#get-an-astra-db-secure-connect-bundle) from the connect page of your database and upload it to your Gitpod instance. Rename it to `secure-connect-bundle.zip`
* Start the example by running `npm start` in the Gitpod console.

## Objectives
Run a realtime chat app.
  
## How this works
Opening and running the app will populate the database you specify in your `.env` file with the required data, allowing you to explore Mercury.

Mercury is built using:
- [Astra DB](https://www.datastax.com/products/datastax-astra)
- [Astra Streaming](https://www.datastax.com/products/astra-streaming)
- [React](https://reactjs.org/)
- [Feathers](https://feathersjs.com/)