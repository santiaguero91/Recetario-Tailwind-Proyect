import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import {searchRecipeName} from "../redux/actions"


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")   

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit(event) {
    event.preventDefault()
    dispatch(searchRecipeName(name))

    }
    return (
        <div className="grid-col-2 block">
            <input className="
            w-1/3
            mx-auto
            p-4 pl-10 text-sm 
            text-gray-900 
            border 
            border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Search..."
            onChange={(e) => handleInputChange(e)}
            />
            <button className="
            h-12
            text-white 
            bg-blue-700 
            hover:bg-blue-800 
            0 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
            type="submit" 
            onClick={(event) => handleSubmit(event)} >
            Search</button>
        </div>
    )
}