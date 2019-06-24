Sometimes people to host an event but can't think of a party game to feature. Also, sometimes people want to play a specific party game but can't find people to play with. So, we decided to make an application that lets you search for game ideas and also find events that are hosting your favorite games. This way, people can connect and play the games that they love.

## Models

![Model diagram](https://github.com/ismailshak/rec-creation/blob/master/planning/img/models.png "Model Diagram")

We broke down our models into three categories. A game model, an event model and a user model. We eventually want to add two bonus features where a user can search by what supplies they have and see a list of games they can play with the supplies on hand, and add authentication where a user can create games, host events and participate in events. This is why they're blocked off by a line, to show they're planned for when we get the MVP done.



## ERD

![ERD diagram](https://github.com/ismailshak/rec-creation/blob/master/planning/img/models.png "ERD Diagram")

The Entities that we chose for our ERD were User, Events, Games, and the option to add in Supplies for the Games.

We chose this layout for our relationships to have the User move through the events to find Games to either join or host.

The Users can have one or many events by either hosting or participating in the events. Users can also search for individual games.

Events can only have one game but many users as host or participants

Games can have none or multiple events.
