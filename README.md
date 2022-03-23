# basic-express-server

A useless HTTP server for demonstration purposes.

## Deployed links:

- [Heroku Link](https://basic-express-server-bc.herokuapp.com/person)

## UML

![UML Diagram](./assets/Basic-Server-UML.png)

## Installation

- Clone from this repo `git clone https://github.com/bradyjcamp/basic-express-server.git`
- cd into basic-express-server
- `npm install`
  - dotenv
  - express
  - nodemon
  - jest
  - supertest

## Usage

Once installed, run `npm start`

## Contributors / Authors

- Brady Camp
- JS 401 d46 class.

## Features / Routes

- GET : `/person`
  - Parameters
    - must include a query parameter of name.
  - Response
    - status 200, and string body if parameters look good.
      - `{name: somename}`
    - status 404, if incorrect route.
    - status 500, if query parameters incorrect