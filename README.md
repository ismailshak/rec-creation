# Rec|Creation Games and Events App

Families want to find fun games for parties, play-dates, and get-togethers that they might host. Or, sometimes they’d like to seek out events in which they’ll be able to participate in particular games so they can try them out.

We made an app so people can browse games and find events. This way they can get active, have fun, and even meet new people.

![Rec|Creation App ScreenShot](/planning/image/Home Screen Capture.png)

## Built With:

We built an api to interact with a list of games, events, and users and all of their properties.
The api was created with Node.js, Express, MongoDB, and Mongoose. Postman was used for testing routes throughout development. And, ultimately the api was deployed via Heroku and hosted by MongoDB Atlas.

The backend was extended by a front end created with React.

## Dependencies:

Back End: Express, Mongoose, Cors, Body-Parser, JWT-Simple, Passport, Passport-JWT

Front End: Axios, React, React-Dom, React-Router-Dom, React-Scripts

## Features:

- User Authentication
- Utilizes models for Games, Events, and Users with relevant data fields for each.
- Incorporates complete CRUD functionality implemented with RESTful routes:
  [Api Documentation](https://rec-creation-api.herokuapp.com/)

## Site Map:

Home
Games
Individual Game
Events
Individual Event
Host
Log-In
Signup

## Contributors:

This project was a collaboration involving the input of Ismail Eshakankiry, Sean Urbassik, and Jordan Mittelman.

Initial planning involved coming up with a project idea and developing data models and wireframes, creating repositories, as well as designating workflow guidelines, responsibilities, and a work schedule. For more details, visit the planning directory's md file.

Overall, there was great teamwork and combined effort across all tasks. But, general roles were allocated as follows:

Ismail-
Site Design Mockups, Frontend Manipulation and Styling, User Authentication, CRUD Implementation, Website Functionality and Troubleshooting

Sean-
Set up the React Components, Pages, and Overall Framework for the Front End

Jordan-
Wireframes, Data Collection, Back End / Build the Api, Apidocs
