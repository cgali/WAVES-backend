# *_WAVES_ (Backend)*

## *Instructions how to start*
* Ask for API keys.

* Create `.env` file like the example `.env.sample` .

* Install all the package with ’npm install’.

* Start with `npm run start`.

**http://localhost:5000**


## *_Description_*
This project is based on the idea of various webpages like [PureSurfers social networking by surfers for surfing. | By surfers for surfers.](http://www.puresurfers.com/)[Surf Reports, Surf Forecasts and Surfing Photos - Magicseaweed.com](https://magicseaweed.com/), , [World Surf League - The global home of surfing](https://www.worldsurfleague.com/),[Facebook - Entrar o registrarse](https://www.facebook.com/)…and many other. The idea is to connect the surfers of all of the country to go surfing together, know more about each other and help the surfing community to grow healthy. For that, the surfers can make events and published them at the app, so people can join in and go. These types of events could be competitions, training, beach bbq or just go surfing. In the other hand, like a user of the app you can rate some specs of every beach like the quality of water or sand, the height of the waves... so and app made for a surfer to surfers. Aloha!! 🤙


## *_Motivation_*
I'm always searching for the conditions of waves and seeing a lot of app I'm the only surfer in my family and I'm always going surfing alone. Some times it's cool to be alone in the water but if you don't share your time, your waves and your passion... is like that is missing something... For that reason, I decided to make a social network for surfers.


## *_MVP_*
* Make the route of auth.

* Make the route of profile.

* Make the route of surfer.

* Make the route of beaches.

* Make the route of events.

* Make the route of  reviews.


## *_Backlog_*
* Connect the MSW API.


## *_ROUTES Backend:_*

### *Endpoints*
| Method | Path         | Description     | Body |
| :----: | ------------ | --------------- | ---- |
|  GET   | `/protected` | Protected route |      |

### *Authentication endpoints*
| Method | Path      | Description    | Body                     |
| :----: | --------- | -------------- | ------------------------ |
|  GET   | `/whoami` | Who am i       |                          |
|  POST  | `/signup` | Signup a user  | `{ email, password }` |
|  POST  | `/login`  | Login a user   | `{ email, password }` |
|  GET   | `/logout` | Logout session |                          |

### *Profile endpoints*
| Method | Path      | Description    | Body                     |
| :----: | --------- | -------------- | ------------------------ |
|  GET   | `/profile` | Go to your profile      |                          |
|  PUT  | `/profile` | Update your profile  | `{ image, email, username, level, favoriteBoard, typesOfWaves, frequentsBeaches, myEvents, events}` |

### *Surfers endpoints*
| Method | Path      | Description    | Body                     |
| :----: | --------- | -------------- | ------------------------ |
|  GET   | `/surfers-list` | Obtain all the surfer’s profile       |  |
|  GET  | `/surfers-list/:id` | Obtain specific info of a surfer  |  |

### *Events endpoints*
| Method | Path      | Description    | Body                     |
| :----: | --------- | -------------- | ------------------------ |
|  GET   | `/events-list` | Obtain all the events       |  |
|  GET  | `/events-list/:id` | Obtain specific info of an event  |  |
|  POST  | `/events-list`  | Create new event   | `{ title, image, description, beach, owner, date }` |
|  PUT   | `/events-list/:id` | Update an event | `{ title, image, description, beach, owner, date }` |
|  DELETE   | `/events-list/:id` | Delete an event |                          |

### *Reviews endpoints*
| Method | Path      | Description    | Body                     |
| :----: | --------- | -------------- | ------------------------ |
|  GET   | `/review-list` | Obtain all the reviews       |  |
|  POST   | `/review-list ` | Add a review      |  |
|  PUT   | `/review-list/:id` | Update a review     |  |
|  DELETE  | `/review-list/:id` | Delete a review |  |

### *Beach endpoints*
| Method | Path      | Description    | Body                     |
| :----: | --------- | -------------- | ------------------------ |
|  GET   | `/beaches-list` | Obtain all the beaches       |  |
|  GET  | `/beaches-list/:id` | Obtain specific info of a post  |  |

## *_Models_*
* **Surfer/User model**

```
{
	image: String;
	email: String;
	username: String;
	level: String;
  	board: {
		type: String;
		size: String;
	},
	typesOfWaves: Array;
	frequentsBeaches: Array;
	timestamps: {
      		createdAt: 'created_at',
      		updatedAt: 'updated_at',
    },
}
```

* **Beach model**

```
{
	name: String;
	image: String;
  	typesOfWaves: Array;
	beachBackground: Array;
	socialEnvironment: String;
	description: String;
	timestamps: {
      		createdAt: 'created_at',
      		updatedAt: 'updated_at',
    },
}
```

* **Event model**

```
{
	user_id: ObjectId<User>;
	title: String;
	beach: String;
	date: Date;
	type: Array;
	description: String;
	participants: Array;
	timestamps: {
      		createdAt: 'created_at',
     		updatedAt: 'updated_at',
    },
}
```

* **Review model**

```
{
	user_id: ObjectId<User>;
	title: String;
	description: String;
	timestamps: {
      		createdAt: 'created_at',
     		updatedAt: 'updated_at',
    },
}
```


## _*Links*_

### *Trello*
[Trello](https://trello.com/b/4dG88ijR/breaking-waves)

### *Git*
The url to the repository and to the deployed project.

https://github.com/cgali/WAVES-frontend
https://github.com/cgali/WAVES-backend

### *Deploy link*
(https://waves-project-app.herokuapp.com/)

### *Slides*
[Slides Link](http://slides.com/)