package db

import (
  "context"
  "fmt"
  "log"
  "os"
  "github.com/mongodb/mongo-go-driver/mongo"
)

var Collection *mongo.Collection

func dbConnectionString() string {
  return fmt.Sprintf("mongodb://%s:%s", os.Getenv("MONGO_HOST"), os.Getenv("MONGO_PORT"))
}

func Init() {
  fmt.Println("Initialize database")
  // Connect to mongo db
  client, err := mongo.Connect(context.TODO(), dbConnectionString())
  if err != nil {
    log.Fatal(err)
  }

  // Check connection
  err = client.Ping(context.TODO(), nil)
  if err != nil {
    log.Fatal(err)
  }

  // save reference to collection object
  Collection = client.Database(os.Getenv("MONGO_DB")).Collection(os.Getenv("MONGO_COLLECTION"))

  fmt.Println("Connected to MongoDB!")
}

