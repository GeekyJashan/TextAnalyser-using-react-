import React,{useState} from 'react'



export default function TextForm(props) {
  const [myStyle,setStyle]=useState({
    color:'white',
    backgroundColor:'black'}
);

const [btnText,setBtnText]=useState("Enable Dark Mode"
);

   // ***
const[text,setText]=useState('');
   //*** */
   // text="new text";//wrong way to change the new text
   // setText("this is new text");//correct way to change the text

// const[size,setSize]=useState('90 px');
// const increaseSize=()=>{
//   return size++;
// }  


const darkmode=()=>{

    if(myStyle.color==='white'){
        setStyle({color:'black',
        backgroundColor:'white',
        border: '2px solid black',
        borderRadius: '13px'})
        setBtnText("Enable Dark Mode")
    }
    else{
        setStyle({color:'white',
        backgroundColor:'black',
        border: '2px solid white',
          borderRadius: '13px'})
        setBtnText("Enable Light Mode")
    }
   
}
    const uppercase=()=>{
        console.log("uppercase was clicked");
       let newText=text.toUpperCase(); 
        setText(newText);

    }
    const lowercase=()=>{
        console.log("lowercase was clicked");
       let newText=text.toLowerCase(); 
        setText(newText);

    }
    const Clear=()=>{
        console.log("Clear was clicked");
       let newText=""; 
        setText(newText);

    }
    function camelCase(text) {
      return text
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\b[a-z]/g, function (letter) {
          return letter.toUpperCase();
        });
    }
    function copyToClipboard(text) {
      // Check if the Clipboard API is supported
      if (navigator.clipboard) {
        // Use the Clipboard API to write the text to the clipboard
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log('Text copied to clipboard using Clipboard API');
          })
          .catch(err => {
            console.error('Failed to copy text using Clipboard API: ', err);
          });
      } else {
        // Use document.execCommand("copy") method as fallback
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
    
        // Try to execute the copy command
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        // Cleanup
        document.body.removeChild(el);
      }
    }
    
    
    const camelcase=()=>{
        console.log("Camelcase was clicked");
       let newText=camelCase(text); 
        setText(newText);

    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
 
    const l=(text)=>{
      if(text=="")return 0;
      
      else return text.split(" ").length;
    
    }
    const removeExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));

    }
  return (
    <>
    <div>   
<div className="container">
<div style={{display: 'flex', justifyContent: 'space-between'}}>
<h1>{props.heading}</h1>
<div>

<button className="btn btn-success mx-1 mb-1 " onClick={Clear} >Clear</button>
<button className="btn btn-success mx-1 mb-1 " onClick={darkmode} >{btnText}</button>
{/* <button className="btn btn-success mx-1 mb-1 " onClick={increaseSize} >Increase Font Size</button> */}
<button className="btn btn-success mx-1 mb-1" onClick={copyToClipboard(text)}>Copy</button></div>
</div>
<div className="mb-3">

<textarea className="form-control" id="exampleFormControlTextarea1" value={text}
placeholder="Enter text here" onChange={handleOnChange} rows="8" style={{ fontSize: '20px' , ...myStyle}}></textarea>
</div>
<button className="btn btn-success mx-1" onClick={uppercase}>Convert to Uppercase</button>
<button className="btn btn-success mx-1" onClick={lowercase}>Convert to Lowercase</button>
<button className="btn btn-success mx-1" onClick={camelcase}>Convert to Camelcase</button>
<button className="btn btn-success mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>


    </div>
    </div>
    <div className="container">

    <h3 className='mt-3'>Your Text Summary</h3>
    <p> {text.trim().split(" ").filter(Boolean).length} words and {text.length} characters</p>
    <p> {0.007 *text.trim().split(" ").filter(Boolean).length} minutes required to read the whole document </p>
    </div>
  <div className="container">
    <h3>Preview</h3>
    <p style={{fontSize: '10px'}}>{text}</p>
  </div>
  </>
  )
}
 