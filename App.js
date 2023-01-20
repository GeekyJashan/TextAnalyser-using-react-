import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';


function App() {
const [mode,setMode]=useState('dark');
const [alert, setAlert] = useState(null);
const showAlert=(message,type)=>{
  setAlert({msg:message,
  type:type })
}
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="#cfcce0";
    document.body.style.color="#000000";
    showAlert("Dark Mode has been enabled","success");
  }
    else{
    setMode('light');
    document.body.style.backgroundColor="#444444";
    document.body.style.color="#ffffff";
    showAlert("Dark Mode has been Disabled","success");

  }
}

  return (
    
   
<>
<Navbar title="TextUtils2" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm heading="Enter the text to analyse"  />
{/* <About/> */}


</div>

</>

  
 
  );
}

export default App;
