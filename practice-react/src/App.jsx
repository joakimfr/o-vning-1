import './App.css';
import About from './components/About/About';
import Image from './components/Image/Image';

function App() {
 const ada = 'Ada Lovelace'

  return (
    <div className="App">
      <h1>{ ada }</h1>
      <Image />
      <About />
    </div>
  )
}

export default App
