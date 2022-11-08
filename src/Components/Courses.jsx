import axios from "axios"
import React, { useState, useEffect } from "react"
import { Card, CardContent, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"


// import { useNavigate } from "react-router-dom"



export const Courses = () => {
    const navigate = useNavigate()
    const [Courses, setCourses] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const apiData = await axios.get("https://api.bricketc.com/bricketc-backend-php/get_all_courses.php")
        console.log("api", apiData.data.body)
        setCourses(apiData.data.body)
    }
    const handleShow = (item) => {
        console.log("==>", item)
        navigate("/details", { state: item })
    }

    return (
        <div>
            <h1>COURSES HERE</h1>
            <Grid container spacing={3}>

                {Courses.map((item, ind) => {
                    return (
                        <Grid item xs={3}>
                            <Card onClick={() => handleShow(item)}>
                                <CardContent>
                                    <img src={item.imageUrl} alt="" />
                                    <h1>{item.name.substr(0, 10)}</h1>
                                    <h4>{item.subjectName}</h4>

                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    )
}