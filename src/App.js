import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    city: "",
    country: "",
  });

  const handleChangeCity = (event) => {
    setState({
      ...state, city: event.target.value
    })
  }

  const handleChangeCountry = (event)=> {
    setState({
      ...state, country: event.target.value
    })
  }

  return (

    <form>
      <div>
        <input type="text" placeholder="City" value={state.city} onChange={handleChangeCity} />
      </div>
      <div>
        <input type="text" placeholder="Country" value={state.country} onChange={handleChangeCountry} />
      </div>

      <h1>I live in {`${state.city}, ${state.country}`} </h1>
    </form>
  );
};

export default App;
