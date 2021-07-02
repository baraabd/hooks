import React, {useState} from "react";


const App = () => {

  const [activated, setActivated] = useState(false)
  const buttonText = activated ? 'Active' : 'Inactive'

  const changeActive = ()=> {
    setActivated(!activated)
  }
  return (
      <button onClick = {changeActive} >
        {buttonText}
      </button>
    );
}

export default App;
