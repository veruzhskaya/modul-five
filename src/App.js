import { useState } from 'react';
import { data, dataTwo } from './data';
import './App.css';




function App() {
  const [seasons, setSeasons] = useState (data)
 
  const [pictures, setPictures] = useState(0)
  
  const {picture} = dataTwo[pictures]
  const [showMore, setShowMore] = useState (false) 


  const nextPicture = () => {
    setPictures ((pictures => {
    pictures ++;
  if (pictures> dataTwo.length-1) {
    pictures=0;
   }
   return pictures
}))
   }

   const previousPicture =() => {
    setPictures ((pictures => {
      pictures --;
      if (pictures<0) {
        return dataTwo.length-1;
      }
      return pictures
    }))
  }

  const removeSeason= (id) => {
    let newSeasons = seasons.filter (season =>
      season.id !==id
    )
    setSeasons (newSeasons)

  

    

  }
  
  return (
    <div>
   
 <div className='container'>
  <h1><span>fashion 2022-2023.</span> {seasons.length} seasons!</h1>
 </div>
 <div className='container'>
<h3>{showMore? "What is worth trying on in the fall and winter of 2023 to be in trend? Fashion trends this time are extremely diverse, designers were willingly inspired by the fashion of the 80s, 90s and 2000s, and which of their ideas to adopt is up to you.":"What is worth trying on in the fall and winter of 2023 to be in trend? Fashion trends this time are extremely diverse, designers were willingly inspired by the fashion of the 80s, 90s and 2000s, and which of their ideas to adopt is up to you.".substring(0,100)+ "..."}
<button className='show' onClick={() => setShowMore(!showMore)}>{showMore? "show less": "show more"}</button></h3>
 </div>
 <div className='container'>
  <button className='next' onClick={previousPicture}>previous</button>
  <img className='picture' src={picture} alt="people"/>
  <button className='next' onClick={nextPicture}>next</button>
 </div>

 {seasons.map (( element => {
  const {id, season, image} = element
  return (
<div key={id}>
  <div className='container'>
  <h2>{id}. {season}</h2>
  </div>
  <div className='container'>
  <img className='photo' src={image} alt='fashion'/>
  </div>

  <div className='container'>
  <button className='remove' onClick={() => removeSeason(id)}>remove</button>
  </div>
</div>
  )
 }))}
 <div className='container'>
  <button className='btn' onClick={() => setSeasons([])}>delete all</button>
 </div>
    </div>
  );
 


}

export default App;
