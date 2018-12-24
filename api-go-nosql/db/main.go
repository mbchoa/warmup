package db

import (
  "context"
  "fmt"
  "log"
  "github.com/mongodb/mongo-go-driver/mongo"
)

var Collection *mongo.Collection

func Init() {
  // Connect to mongo db
  client, err := mongo.Connect(context.TODO(), "mongodb://localhost:27017")

  if err != nil {
    log.Fatal(err)
  }

  // Check connection
  err = client.Ping(context.TODO(), nil)

  if err != nil {
    log.Fatal(err)
  }

  fmt.Println("Connected to MongoDB!")

  // save reference to collection object
  Collection = client.Database("workout").Collection("exercises")

  fmt.Println("Connected to MongoDB!")
}

