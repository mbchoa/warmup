package controllers

import (
  //"encoding/json"
  "context"
  "fmt"
  "net/http"
  "github.com/gin-gonic/gin"
  "github.com/mongodb/mongo-go-driver/bson/primitive"
  "github.com/mbchoa/warmup/api-go-nosql/models"
  "github.com/mbchoa/warmup/api-go-nosql/db"
)

func CreateWorkout(c *gin.Context) {
  fmt.Println("Create a workout")
  var data models.Workout
  if err := c.ShouldBindJSON(&data); err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }
  // c.IndentedJSON(http.StatusOK, data)

  result, err := db.Collection.InsertOne(context.TODO(), data)
  if err != nil {
    c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
    return
  }

  if oid, ok := result.InsertedID.(primitive.ObjectID); ok {
    c.JSON(http.StatusCreated, map[string]interface{}{
      "_id": fmt.Sprintf("http://localhost:8080/api/v1/workouts/%s", oid.Hex()),
    })
  }

  c.JSON(http.StatusInternalServerError, gin.H{"error": "Error type asserting InsertedID"})
}

func GetWorkouts(c *gin.Context) {
  fmt.Println("Get all workouts")
}

func GetWorkoutById(c *gin.Context) {
  id := c.Param("id")
  fmt.Printf("Get workout by id: %s", id)
}

func UpdateWorkoutById(c *gin.Context) {
  id := c.Param("id")
  fmt.Println("Update workout by id: %s", id)
}

func DeleteWorkoutById(c *gin.Context) {
  id := c.Param("id")
  fmt.Println("Delete workout by id: %s", id)
}

