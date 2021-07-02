import React, { useState } from "react";

const App = () => {
  
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const handleChangeCity = (event) => {
    setCity(event.target.value)
  }

  const handleChangeCountry = (event)=> {
    setCountry(event.target.value)
  }

  return (

    <form>
      <div>
        <input type="text" placeholder="City" value={city} onChange={handleChangeCity} />
      </div>
      <div>
        <input type="text" placeholder="Country" value={country} onChange={handleChangeCountry} />
      </div>

      <h1>I live in {`${city}, ${country}`} </h1>
    </form>
  );
};

export default App;
