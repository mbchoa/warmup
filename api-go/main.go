package main

import (
  "log"
  "github.com/gin-gonic/gin"
  "github.com/mbchoa/warmup-api/db"
  WorkoutController "github.com/mbchoa/warmup-api/controllers"
)

func main() {
  log.Println("Start server..")

  db.Init()

  r := gin.Default()

  v1 := r.Group("/api/v1")
  {
    workouts := v1.Group("/workouts")
    {
      workouts.GET("/", WorkoutController.GetWorkouts)
      workouts.POST("/", WorkoutController.CreateWorkout)
      workouts.GET("/:id", WorkoutController.GetWorkout)
      workouts.PUT("/:id", WorkoutController.UpdateWorkout)
      workouts.DELETE("/:id", WorkoutController.DeleteWorkout)
    }
  }

  r.Run()
}
