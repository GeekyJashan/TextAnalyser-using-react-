import React from 'react'

export default function Alert(props) {

 const capitalizeFirstLetter=(str)=>{
    
    const lower=str.toUpperCase();
    return lower.charAt(0)+lower.slice(1);
 }
//  var x="success";
//  {props.alert.type}

//  capitalizeFirstLetter(props.alert.type);
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show` }role="alert">
        
       
  <strong>{capitalizeFirstLetter(props.alert.type)}</strong> :{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
