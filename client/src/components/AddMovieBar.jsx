import React from 'react';

class AddMovieBar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      newMovTitle: ''
    }

    this.newMovTitleIns = this.newMovTitleIns.bind(this);
  }

  // New Movie Title Insert
  newMovTitleIns (title) {
    this.setState({ newMovTitle: title });
  }

  render () {
    return (
      <div className="bar">
        <input type="text" placeholder="Add movie title here" onChange={(e)=>this.newMovTitleIns(e.target.value)}/>
        <button onClick={(e)=>this.props.newMovTitleAdd(this.state.newMovTitle)}>Add</button>
      </div>
    )
  }
}

export default AddMovieBar;