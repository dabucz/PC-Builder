package main
import (
	"database/sql"
	"log"
)
func getCPUs(db *sql.DB) map[string]interface{} {
	rows, err := db.Query("SELECT component_id, displayname, socket, core, tdp, price, manufacturer, url, recommended FROM cpu")
	if err != nil {
		log.Println(err)
		// In case of an error, return an empty map to avoid sending invalid data.
		return map[string]interface{}{}
	}
	defer rows.Close()

	cpuComponents := map[string]interface{}{}
	for rows.Next() {
		var component_id, displayname, socket, url, manufacturer string
		var core, tdp int
		var price float64
		var recommended sql.NullBool

		if err := rows.Scan(&component_id, &displayname, &socket, &core, &tdp, &price, &manufacturer, &url, &recommended); err != nil {
			log.Println(err)
			continue
		}

		cpuComponents[component_id] = map[string]interface{}{
			"displayname":   displayname,
			"socket":        socket,
			"core":          core,
			"tdp":           tdp,
			"price":         price,
			"manufacturer":  manufacturer,
			"url":           url,
			"recommended":   recommended.Bool,
		}
	}
	return cpuComponents
}

func getGPUs(db *sql.DB) map[string]interface{} {
	rows, err := db.Query("SELECT component_id, displayname, gb, tdp, price, manufacturer, url, recommended FROM gpu")
	if err != nil {
		log.Println(err)
		// In case of an error, return an empty map to avoid sending invalid data.
		return map[string]interface{}{}
	}
	defer rows.Close()

	gpuComponents := map[string]interface{}{}
	for rows.Next() {
		var component_id, displayname, url, manufacturer string
		var gb, tdp int
		var price float64
		var recommended sql.NullBool

		if err := rows.Scan(&component_id, &displayname, &gb, &tdp, &price, &manufacturer, &url, &recommended); err != nil {
			log.Println(err)
			continue
		}

		gpuComponents[component_id] = map[string]interface{}{
			"displayname":   displayname,
			"gb":            gb,
			"tdp":           tdp,
			"price":         price,
			"manufacturer":  manufacturer,
			"url":           url,
			"recommended":   recommended.Bool,
		}
	}
	return gpuComponents
}

func getRAMs(db *sql.DB) map[string]interface{} {
	rows, err := db.Query("SELECT component_id, displayname, gb, type, price, manufacturer, url, recommended FROM ram")
	if err != nil {
		log.Println(err)
		// In case of an error, return an empty map to avoid sending invalid data.
		return map[string]interface{}{}
	}
	defer rows.Close()

	ramComponents := map[string]interface{}{}
	for rows.Next() {
		var component_id, displayname, url, manufacturer, ddr string
		var gb int
		var price float64
		var recommended sql.NullBool

		if err := rows.Scan(&component_id, &displayname, &gb, &ddr, &price, &manufacturer, &url, &recommended); err != nil {
			log.Println(err)
			continue
		}

		ramComponents[component_id] = map[string]interface{}{
			"displayname":   displayname,
			"gb":            gb,
			"type":          ddr,
			"price":         price,
			"manufacturer":  manufacturer,
			"url":           url,
			"recommended":   recommended.Bool,
		}
	}
	return ramComponents
}

func getMotherboards(db *sql.DB) map[string]interface{} {
	rows, err := db.Query("SELECT component_id, displayname, price, manufacturer, socket, url, recommended FROM `motherboard`")
	if err != nil {
		log.Println(err)
		// In case of an error, return an empty map to avoid sending invalid data.
		return map[string]interface{}{}
	}
	defer rows.Close()

	motherboardComponents := map[string]interface{}{}
	for rows.Next() {
		var component_id, displayname, url, manufacturer, socket string
		var price float64
		var recommended sql.NullBool

		if err := rows.Scan(&component_id, &displayname, &price, &manufacturer, &socket, &url, &recommended); err != nil {
			log.Println(err)
			continue
		}

		motherboardComponents[component_id] = map[string]interface{}{
			"displayname":   displayname,
			"socket":        socket,
			"price":         price,
			"manufacturer":  manufacturer,
			"url":           url,
			"recommended":   recommended.Bool,
		}
	}
	return motherboardComponents
}

func getPSUs(db *sql.DB) map[string]interface{} {
	rows, err := db.Query("SELECT component_id, displayname, wattage, price, manufacturer, url, recommended FROM psu")
	if err != nil {
		log.Println(err)
		// In case of an error, return an empty map to avoid sending invalid data.
		return map[string]interface{}{}
	}
	defer rows.Close()

	psuComponents := map[string]interface{}{}
	for rows.Next() {
		var component_id, displayname, url, manufacturer string
		var wattage int
		var price float64
		var recommended sql.NullBool

		if err := rows.Scan(&component_id, &displayname, &wattage, &price, &manufacturer, &url, &recommended); err != nil {
			log.Println(err)
			continue
		}

		psuComponents[component_id] = map[string]interface{}{
			"displayname":   displayname,
			"wattage":       wattage,
			"price":         price,
			"manufacturer":  manufacturer,
			"url":           url,
			"recommended":   recommended.Bool,
		}
	}
	return psuComponents
}

func getStorage(db *sql.DB) map[string]interface{} {
	rows, err := db.Query("SELECT component_id, displayname, gb, price, manufacturer, url, recommended FROM storage")
	if err != nil {
		log.Println(err)
		// In case of an error, return an empty map to avoid sending invalid data.
		return map[string]interface{}{}
	}
	defer rows.Close()

	storageComponents := map[string]interface{}{}
	for rows.Next() {
		var component_id, displayname, url, manufacturer string
		var gb int
		var price float64
		var recommended sql.NullBool

		if err := rows.Scan(&component_id, &displayname, &gb, &price, &manufacturer, &url, &recommended); err != nil {
			log.Println(err)
			continue
		}

		storageComponents[component_id] = map[string]interface{}{
			"displayname":   displayname,
			"gb":            gb,
			"price":         price,
			"manufacturer":  manufacturer,
			"url":           url,
			"recommended":   recommended.Bool,
		}
	}
	return storageComponents
}

func getCases(db *sql.DB) map[string]interface{} {
	rows, err := db.Query("SELECT component_id, displayname, price, manufacturer, url, recommended FROM `case`")
	if err != nil {
		log.Println(err)
		// In case of an error, return an empty map to avoid sending invalid data.
		return map[string]interface{}{}
	}
	defer rows.Close()

	caseComponents := map[string]interface{}{}
	for rows.Next() {
		var component_id, displayname, url, manufacturer string
		var price float64
		var recommended sql.NullBool

		if err := rows.Scan(&component_id, &displayname, &price, &manufacturer, &url, &recommended); err != nil {
			log.Println(err)
			continue
		}

		caseComponents[component_id] = map[string]interface{}{
			"displayname":   displayname,
			"price":         price,
			"manufacturer":  manufacturer,
			"url":           url,
			"recommended":   recommended.Bool,
		}
	}
	return caseComponents
}