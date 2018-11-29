## Development
### Frontend

```
$ cd web
$ npm install
$ npm start
```

Navigate to http://localhost:3000 to interact with React application.

### Backend

```
$ cd api
$ virtualenv env
$ source env/bin/activate
$ (env) cd app
$ (env) pip install -r requirements.txt
$ (env) python src/app.py
```

Navigate to http://localhost:5000/calculate-warmup/<target_weight> to fetch calculated warmup weights for input `target_weight` value passed.

## Production

Coming soon.

