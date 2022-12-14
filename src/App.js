import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [hotels, setHotels] = useState(data);
  const [showText, setShowText] = useState (false);
  const deleteHotel = (id) => {
    let newHotels = hotels.filter (hotel => hotel.id !== id);
    setHotels (newHotels);
  };

  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }

  return (
    <div className='container'>
      <div>
        <h1>
          BEST {hotels.length} HOTELS IN NYC
        </h1>
      </div>
      {hotels.map((item => {
        const {id, hotel, description, image, source, showMore} = item;
        return (
          <div className='hotels' key={id}>
            <div>
              <h2>{hotel}</h2>
            </div>
            <div className='description'>
              <p>{showMore ? description : description.substring(0, 150) + "..."}
              <button className='btnShow' onClick={() => showTextClick(item)}>{showMore ? 'Show less' : "Show more"}</button>
              </p>
            </div>
            <div>
              <img src = {image} width='300px' alt = 'Hotel' />
            </div>
            <div>
              <p>{source}</p>
            </div>
            <div>
              <button className='btnOne' onClick={() => deleteHotel(id)}>REMOVE</button>
            </div>
          </div>
        )
      }))}
      <div>
        <button className='btnTwo' onClick={() => setHotels([])}>DELETE ALL</button>
      </div>
    </div>
  )
}

export default App;
