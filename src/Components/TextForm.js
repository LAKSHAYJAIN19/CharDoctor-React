import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick = ()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase","success");
}
  const cleartext = ()=>{
    let newtext='';
    setText(newtext);
    props.showAlert("Text cleared","success");
  }
  const handleExSpace = ()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces have been removed","success");
  }
  
  const handleCopy = ()=>{
    var t=document.getElementById("myBox");
    t.select();
    navigator.clipboard.writeText(t.value); 
    props.showAlert("Text copied to clipboard","success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  
}
  const [text,setText] = useState('Enter text here');  
  return (
    <>
      <div className="container" style={{ color:props.mode==='dark'?'white':'#18392B'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control " value={text} style={{ backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#18392B',borderColor : 'green', boxShadow: '0 0 5px green' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-success mx-1" onClick={handleExSpace}>Remove Extra Spaces</button>
      <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-success mx-1" onClick={cleartext}>Clear Text</button>
    </div>
    <div className="container" my-2 style={{ color:props.mode==='dark'?'white':'#18392B'}}>
      <h2>Your text summary here</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
