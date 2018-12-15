package controller

import (
  "fmt"
  "net/http"
  "github.com/gin-gonic/gin"
  "github.com/satori/go.uuid"
  "github.com/mbchoa/warmup-api/db"
  "github.com/mbchoa/warmup-api/models"
)

func GetWorkouts (c *gin.Context) {
  // queries and scans workout array data into empty slice of Workout structs
  workouts := []models.Workout{}
  err := db.GetDB().Select(&workouts, "SELECT * from workouts")

  // returns 500 error response if db retrieval failed
  if err != nil {
    c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
    return
  }

  // returns 200 success response with array of workouts retrieved from DB
  c.JSON(http.StatusOK, workouts)
}

func GetWorkout (c *gin.Context) {
  // get workout id from url path parameter
  workoutId := c.Param("id")

  // fetches workout data from database using workoutId from request. 
  // returns 500 error if database fails to fetch the workout data from table
  // returns 200 with workout data if db retrieval successful
  workout := models.Workout{}
  err := db.GetDB().Get(&workout, "SELECT * from workouts WHERE id=$1", workoutId)
  if err != nil {
    c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
    return
  }
  c.JSON(http.StatusOK, workout)
}

func CreateWorkout (c *gin.Context) {
  // binds JSON request body to workout struct model.
  // returns bad request response if fails
  var workout models.Workout
  if err := c.ShouldBindJSON(&workout); err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }

  // inserts new workout row into workout table with target_weight data provided from
  // request body.
  // returns 500 error response if database fails to insert value into table
  workoutId := uuid.NewV4()
  _, err := db.GetDB().Exec("INSERT INTO workouts (id, target_weight) VALUES ($1, $2)", workoutId, workout.TargetWeight)
  if err != nil {
    c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
    return
  }

  // TODO: need to find a way to automatically map keys to struct tag definitions in models
  c.JSON(http.StatusOK, gin.H{
    "id": workoutId,
    "target_weight": workout.TargetWeight,
  })
}

func UpdateWorkout (c *gin.Context) {
  workoutId := c.Param("id")

  // bind JSON request body to workout struct model 
  var workout models.Workout
  if err := c.ShouldBindJSON(&workout); err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }

  // begin transaction to update workout row data
  tx := db.GetDB().MustBegin()
  tx.MustExec("UPDATE workouts SET target_weight = $1 WHERE id = $2", workout.TargetWeight, workoutId)
  err := tx.Commit()

  // send 500 error response if transaction failed
  if err != nil {
    c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
    return
  }

  // send 204 response 
  c.JSON(http.StatusNoContent, gin.H{})
}

func DeleteWorkout (c *gin.Context) {
  fmt.Println("Delete a workout")

  // get workout id of workout to delete
  workoutId := c.Param("id")

  // begin transaction to delete workout from table
  tx := db.GetDB().MustBegin()
  tx.MustExec("DELETE FROM workouts WHERE id = $1", workoutId)
  err := tx.Commit()

  // send 500 error response if transaction fails
  if err != nil {
    c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
    return
  }

  // send 204 response
  c.JSON(http.StatusNoContent, gin.H{})

}

