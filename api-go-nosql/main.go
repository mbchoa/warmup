package main

import (
    "github.com/gin-gonic/gin"
    cors "github.com/rs/cors/wrapper/gin"

    "github.com/mbchoa/warmup/api-go-nosql/db"
    WorkoutsController "github.com/mbchoa/warmup/api-go-nosql/controllers"
)

func main() {
  // Initialize database connection go Mongo DB
  db.Init()

  // Setup router
  router := gin.Default()
  router.Use(cors.Default())

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

