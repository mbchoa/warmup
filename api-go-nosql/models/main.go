package models

import (
  "time"
  "github.com/mongodb/mongo-go-driver/bson/primitive"
)

type ExerciseSet struct {
  Weight float32 `bson:"weight" json:"weight"`
  Reps []int `bson:"reps" json:"reps"`
}

type Exercise struct {
  Type string `bson:"type" json:"type"`
  WarmupSets []ExerciseSet `bson:"warmup_sets" json:"warmup_sets"`
  WorkSets []ExerciseSet `bson:"work_sets" json:"work_sets"`
}

type Workout struct {
  Id primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
  CreatedAt time.Time `bson:"created_at" json:"created_at"`
  Exercises []Exercise `bson:"exercises" json:"exercises"`
}

