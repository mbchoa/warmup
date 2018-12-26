package models

import "github.com/satori/go.uuid"

type Workout struct {
  Id uuid.UUID `db:"id" sql:"type:uuid"`
  TargetWeight int `db:"target_weight"`
}

