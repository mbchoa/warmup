## Development
### Frontend

```
$ cd web
$ npm install
$ npm start
```

Navigate to http://localhost:3000 to interact with React application.

### Backend

#### Flask
```
$ cd api
$ virtualenv env
$ source env/bin/activate
$ (env) cd app
$ (env) pip install -r requirements.txt
$ (env) python src/app.py
```

Navigate to http://localhost:5000/calculate-warmup/<target_weight> to fetch calculated warmup weights for input `target_weight` value passed.

#### Go
```
$ cd api-go
$ make dev 
```

The dev Makefile script will bring up the postgres service defined in the docker-compose file.
The go API service is served from http://localhost:8080. Navigate to any of the following available API endpoints to test CRUD operations against PostgreSQL database.

##### API endpoints

`GET /api/v1/workouts`: Fetches all workouts

`GET /api/v1/workouts/:workoutId`: Fetches single workout

`POST /api/v1/workouts`: Creates new workout

`PUT /api/v1/workouts/:workoutId`: Updates existing workout

`DELETE /api/v1/workouts/:workoutId`: Deletes existing workout

## Production

Coming soon.

