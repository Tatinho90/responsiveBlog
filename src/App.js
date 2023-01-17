import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Posts from './components/Posts';
import data from './data';
import { Routes, Route} from "react-router-dom"

function App() {
const [numberOfPosts, setNumberOfPosts] = useState(3)

function increasePostNumber(){
  setNumberOfPosts(prev => prev + 3)
}

function decreasePostNumber(){
  setNumberOfPosts(prev => prev -3)

}

  return (
    <>

    <Header />

        <Routes>

          <Route 
            path="/" 
            element= {
              <>
              <Main />
              <div class="mainPost-container">
              <Posts 
                  numberOfPosts = {numberOfPosts}
              />
              
              </div>
              { numberOfPosts < data.length && <p 
                className="show-button" 
                onClick={increasePostNumber}
              >Show More</p>}
              { numberOfPosts === data.length && <p 
                className="show-button" 
                onClick={decreasePostNumber}
              >Show Less</p>}
              
              </>
            }
            >

          </Route>

          <Route 
              path="/AboutMe"
              element= { <AboutMe />}
              >

          </Route>

        </Routes>

    <Footer/>

    </>
  );
}

export default App;
