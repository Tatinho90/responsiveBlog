import React from "react"
import data from "../data.js"



export default function Posts(props){
const builder = data.map((elem, id) => {
    if (id < props.numberOfPosts){
        
    
    
    return (
        <div className="posts-container" key={"e"+elem.id}>

        <img 
            src={elem.image}
            key={"d"+elem.id}
        />

        <h3 
        className="date"
         key={"a"+elem.id}>
            {elem.date}</h3>

        <h2 
        className="post-title" 
        key={"b"+elem.id}>
            {elem.title}</h2>

        <h4 
        className="post-text" 
        key={"c"+elem.id}>
            {elem.text}</h4>
        </div>
    )
}})

    return (
        <>
        {builder}
        </>
    )
}