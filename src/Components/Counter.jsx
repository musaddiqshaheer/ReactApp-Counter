import React, { useState } from "react"
import { TextField } from "@mui/material"
// import  from '@mui/icons-material/SortByAlpha';

export const Counter = () => {
    const [num, setNum] = useState(0)

    return (
        <div>
            <button onClick={e => setNum(num - 1)}>-</button>
            <b>{num}</b>
            <button onClick={e => setNum(num + 1)}>+</button>
            <SortByAlphaIcon />

        </div>
    )
}