import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {action,originals,comedyMovies,horrorMovies,romanceMovies,documentaries} from './ImageUrls/imageUrls'
function App() {
  return (
    <div className="App">
      <NavBar  />
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={romanceMovies} title="Romance" isSmall />
      <RowPost url={comedyMovies} title="Comedy" isSmall />
      <RowPost url={horrorMovies} title="Horror" isSmall />
      <RowPost url={documentaries} title="Documentries" isSmall />

    </div>
  );
}

export default App;
