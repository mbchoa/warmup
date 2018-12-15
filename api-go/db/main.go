package db

import (
  "fmt"
  "log"
  _ "github.com/lib/pq"
  "github.com/jmoiron/sqlx"
)

var createTablesSchema = `
CREATE TABLE workouts (
  id uuid primary key,
  target_weight integer
)`

var db *sqlx.DB

func Init() {
  fmt.Println("Initializing connection to database...")

  var err error
  db, err = sqlx.Open("postgres", "host=postgres user=postgres password=postgres dbname=workouts sslmode=disable")
  if err != nil {
    log.Fatalln(err)
  }

  // check if table already exists before creating table
  _, err = db.Query("SELECT 1 FROM workouts LIMIT 1")
  if err != nil {
    db.MustExec(createTablesSchema)
  }
}

func GetDB() *sqlx.DB {
  return db
}

