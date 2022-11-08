import React, { useEffect, useState } from "react"
import axios from "axios"
import { Card, CardContent, Button, TextField } from "@mui/material"
import "./common.css"
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export const Component1 = () => {
    const [apiData, setApiData] = useState([])
    const [apiDataCopy, setApiDataCopy] = useState([])
    const [search, setSearch] = useState("")

    const getData = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log("===>", result.data)
        setApiData(result.data)
        setApiDataCopy(result.data)

    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        const result = apiDataCopy.filter((item) => item.name.toUpperCase().includes(search.toUpperCase()))
        setApiData(result)
    }, [search])

    const handleDelete = (ind) => {
        const data = apiData.filter((elem, i) => i != ind)
        setApiData(data)
    }

    const handleSort = () => {
        alert("Hello")
    }
    return (
        <div>

            <h1> Hello</h1>
            <TextField variant="standard" label="Search Here" onChange={(e) => setSearch(e.target.value)}></TextField>
            <table>
                <tr>
                    <th>Sl No</th>
                    <th>Name <span> onClick={handleSort}<SortByAlphaIcon /></span></th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Langitude</th>
                </tr>
                {apiData.map((item, ind) => {
                    return (
                        <tr>
                            <td><h3> {ind + 1}</h3></td>
                            <td><h3>{item.name}</h3></td>
                            <td><h3>{item.username}</h3></td>
                            <td><h3>{item.email}</h3></td>
                            <td><h3>{item.address.city}</h3></td>
                            <td><h3>{item.address.geo.lng}</h3></td>
                            <td><Button variant="contained" color="primary" onClick={() => handleDelete(ind)}>Delete</Button></td>
                        </tr>
                    )
                })}
            </table>

            {apiData.map((item) => {
                return (
                    <Card>
                        <CardContent>
                            <h1>{item.name}</h1>
                            <h3>{item.username}</h3>
                            <h3>{item.email}</h3>
                            <h3>{item.address.city}</h3>
                            <h3>{item.address.geo.lng}</h3>
                        </CardContent>
                    </Card>
                )
            })}

        </div>
    )
}