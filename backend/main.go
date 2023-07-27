package main

import (
	"database/sql"
	"log"
	"os"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

func main() {
	devmode := true
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	db, err := sql.Open("mysql", os.Getenv("DB_USER")+":"+os.Getenv("DB_PASSWORD")+"@tcp("+os.Getenv("DB_HOST")+":"+os.Getenv("DB_PORT")+")/"+os.Getenv("DB_NAME"))
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	if (devmode) {
		gin.SetMode(gin.DebugMode)
	} else {
		gin.SetMode(gin.ReleaseMode)
	}
	router := gin.Default()
	router.Use(cors.Default())
	router.SetTrustedProxies([]string{"localhost"})

	api := router.Group("/api")
	api.GET("/getComponents", getComponents(db))

	port := os.Getenv("PORT")
	if port == "" {
		port = "8801"
	}
	router.Run(":"+port)
	
}

func getComponents(db *sql.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		components := map[string]interface{}{
			"cpu": getCPUs(db),
			"gpu": getGPUs(db),
			"ram": getRAMs(db),
			"motherboard": getMotherboards(db),
			"psu": getPSUs(db),
			"storage": getStorage(db),
			"case": getCases(db),
		}
		c.JSON(200, components)
	}
}