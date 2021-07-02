import logo from './logo.svg';
import './App.css';


const Box = (props) => {
  return (
    <div>
     <h1>{props.text}</h1>
     <h2>{props.subtitle}</h2>
    </div>
  )
}

const App = () => {
  return (
      <Box
       text="Hello world"
       subtitle="I love React"
       />
    );
}

export default App;
