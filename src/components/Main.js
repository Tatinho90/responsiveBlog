import React from "react"
import image from "../images/hero.png"

export default function Main(){
    return (
        <div id="image-container">
           <img 
           src={image}
           id="main-img"
           />
                <div className="on-image">
                     < h4 > JANUARY 16, 2023</h4>
                        <h1>My new journey as a bootcamp student.</h1>
                        <p>After several months of learning in the Frontend Developer Career Path, 
                            I've made the big jump over to the Bootcamp to get expert code reviews of 
                            my Solo Projects projects and meet like-minded peers.</p>
                </div>
          
        
        </div>
     
    )
}

// {
//     id: 1,
//     date: "JANUARY 15, 2023",
//     title:"My new journey as a bootcamp student.",
//     text: "After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers."  
// },