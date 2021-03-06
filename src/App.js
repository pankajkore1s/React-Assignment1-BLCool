import './App.css'; 
import React,{useState} from 'react'
function App() {
  const[data,setData]=useState(null)
  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
  }
  return (
    <div className="App">
      <div className='body'>
      <body>
        <h1>BridgeLabz is Cool</h1>
        <h2>{data}</h2>
        <a href="https://www.bridgelabz.com/" target="-main">
          <img src="logo.jpg" alt="BridgeLabz Website" width="100px" ></img><br></br>
        </a>
        <input type="text" onChange={getData} /> 
        <p>At BridgeLabz,We're a Techie community of</p>
        <li>Technologists</li>
        <li>Thinkers</li>
        <li>Builders</li> 
        <p>
          Working together to keep the Tech Employability of Engineers alive and accessible,so tech companies worldwide can get contributors and creators for technology solutions.We believe this act of human collboration accross an Employability platform is essential to individual growth and our collective feature.
        </p>
        <p>
            To know about us, visit <a href="https://www.bridgelabz.com/">Bridgelabz</a>
            to learn even more about our mission i.e. <strong>Employability to all.</strong>
        </p>
      </body>
      
      </div>
    </div>
  );
}

export default App;