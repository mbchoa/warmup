package main

import (
    // "context"
    // "encoding/json"
    // "fmt"
    // "log"
    // "github.com/mongodb/mongo-go-driver/bson"
    // "github.com/mongodb/mongo-go-driver/bson/primitive"
    // "github.com/mongodb/mongo-go-driver/mongo"
    // "github.com/mongodb/mongo-go-driver/mongo/options"
    "github.com/gin-gonic/gin"

    // "github.com/mbchoa/warmup/api-go-nosql/models"
    "github.com/mbchoa/warmup/api-go-nosql/db"
    WorkoutsController "github.com/mbchoa/warmup/api-go-nosql/controllers"
)

func main() {
  // Initialize database connection go Mongo DB
  db.Init()

  // Setup router
  router := gin.Default()

  // v1 API
  v1 := router.Group("/api/v1")
  {
    workouts := v1.Group("/workouts")
    {
      workouts.POST("/", WorkoutsController.CreateWorkout)
      workouts.GET("/", WorkoutsController.GetWorkouts)
      workouts.GET("/:id", WorkoutsController.GetWorkoutById)
      workouts.PUT("/:id", WorkoutsController.UpdateWorkoutById)
      workouts.DELETE("/:id", WorkoutsController.DeleteWorkoutById)
    }
  }

  router.Run(":8080")
}


/*
  // Create ExerciseSet structs to insert into the database
  // deadlift := Exercise{"deadlift", 285, []int{5, 3, 2}}
  squatExercise := models.Exercise{"squat", 200, []int{5, 5, 5}}
  benchExercise := models.Exercise{"bench", 185, []int{5, 5, 5}}
  workout1 := models.Workout{Exercises: []models.Exercise{squatExercise, benchExercise}}

  squatEx2 := models.Exercise{"squat", 205, []int{5, 5, 5}}
  benchEx2 := models.Exercise{"bench", 190, []int{5, 5, 5}}
  workout2 := models.Workout{Exercises: []models.Exercise{squatEx2, benchEx2}}

  squatEx3 := models.Exercise{"squat", 210, []int{5, 5, 5}}
  benchEx3 := models.Exercise{"bench", 195, []int{5, 5, 5}}
  workout3 := models.Workout{Exercises: []models.Exercise{squatEx3, benchEx3}}

    // Insert single document using collection.InsertOne()
  insertResult, err := collection.InsertOne(context.TODO(), workout1)
  if err != nil {
    log.Fatal(err)
  }

  fmt.Println("Inserted a single document: ", insertResult.InsertedID)

  // Insert multiple documents using collection.InsertMany()

  workouts := []interface{}{workout2, workout3}

  insertManyResults, err := collection.InsertMany(context.TODO(), workouts)
  if err != nil {
    log.Fatal(err)
  }

  fmt.Println("Inserted multiple documents: ", insertManyResults.InsertedIDs)

  // Find single document using collection.FindOne
  // Reference: https://stackoverflow.com/questions/53816611/golang-mongo-go-driver-beta-1-using-greater-than-operator
  objectID, _ := primitive.ObjectIDFromHex("5c1f555640722cc207956c86")
  filter := bson.M{"_id": objectID}
  var result models.Workout
  err = collection.FindOne(context.TODO(), filter).Decode(&result)
  if err != nil {
    log.Fatal(err)
  }

  fmt.Printf("Found a single document: %+v\n", result)

  // Find multiple documents using collection.Find
  options := options.Find()

  cur, err := collection.Find(context.TODO(), nil, options)
   if err != nil {
     log.Fatal(err)
   }
  defer cur.Close(context.TODO())

  count := 0
  var results []*models.Workout
  for cur.Next(context.TODO()) {
    // create a value into which the single document can be decoded
    var elem models.Workout
    count++
    err := cur.Decode(&elem)
    if err != nil {
      log.Fatal(err)
    }

    results = append(results, &elem)
  }

  for _, exercise := range results {
    stringJson, _ := json.Marshal(*exercise)
    fmt.Printf("JSON string: %s", stringJson)
  }
}
*/
