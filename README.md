# Rec|Creation Games and Events App

Families want to find fun games for parties, play-dates, and get-togethers that they might host. Or, sometimes they’d like to seek out events in which they’ll be able to participate in particular games to try them out.

We made an app so people can browse games and find/host events. This way they can get active, have fun, and even meet new people.

![Rec|Creation App ScreenShot](https://github.com/ismailshak/rec-creation/blob/master/planning/img/Home%20Screen%20Capture.png "home page screenshot")

## Built With

We built an API to interact with a list of games, events, and users and all of their properties.
The API was created with Node.js, Express, MongoDB, and Mongoose. Postman was used for testing routes, locally, throughout development. And, ultimately the API was deployed via Heroku and the database was hosted on MongoDB Atlas.

The back-end was extended by a front-end, created using React. This was deployed and hosted on Surge.

## Dependencies

Back-End: Express, Mongoose, CORS, Body-Parser, JWT-Simple, Passport, Passport-JWT

Front-End: Axios, React, React-Dom, React-Router-Dom, React-Scripts

## Features

- User Authentication
- Utilizes models for Games, Events, and Users with relevant data fields for each.
- Incorporates complete CRUD functionality implemented with RESTful routes:
  [API Documentation](https://rec-creation-api.herokuapp.com/)

## Contributors

This project was a collaboration involving input from Ismail Eshakankiry, Sean Urbassik, and Jordan Mittelman.

Initial planning involved coming up with a project idea and developing data models and wireframes, creating repositories, as well as designating workflow guidelines, responsibilities, and a work schedule. For more details, [visit the planning directory](https://github.com/ismailshak/rec-creation/tree/master/planning).

Overall, there was great teamwork and combined effort across all tasks. But, general roles were allocated as follows:

Ismail:
Site Design Mockups, Front-End Manipulation and Styling, User Authentication, CRUD Implementation, Website Functionality and Troubleshooting

Sean:
Set up the React Components, Pages, and Overall Framework for the Front End

Jordan:
Wireframes, Data Collection, Back-End / Build the API, implement apidocs

## Known Issues

1. Cannot navigate between Games and Events, must navigate somewhere else and click on desired link.
2. Desired styling improvements for multiple components.
3. Search in Event List not functioning yet.
4. Search in Games doesn't match until the perfect Game name is typed.
