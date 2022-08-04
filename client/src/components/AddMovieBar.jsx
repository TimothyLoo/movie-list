import React from 'react';

var AddMovieBar = (props) => (
  <div className="bar">
    <input type="text" placeholder="Add movie title here" onChange={(e)=>props.newMovTitleIns(e.target.value)}/>
    <button onClick={()=>props.newMovTitleAdd()}>Add</button>
  </div>
)

export default AddMovieBar;