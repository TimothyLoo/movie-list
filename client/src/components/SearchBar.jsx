import React from 'react';

class SearchBar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      whichButton: ''
    }

    this.chgBtnClr.bind(this);
  }

  chgBtnClr (text) {
    this.setState({ whichButton: text });
  }

  render () {
    let wtchedButSty, towtchButSty;
    if (this.state.whichButton === 'Watched') {
      wtchedButSty = {backgroundColor: "LightGreen"};
      towtchButSty = {};
    } else if (this.state.whichButton === 'To Watch') {
      wtchedButSty = {};
      towtchButSty = {backgroundColor: "LightGreen"};
    } else if (this.state.whichButton === '') {
      wtchedButSty = {};
      towtchButSty = {};
    }

    return (
      <div className="bar">
        <button className="searchButton" style ={wtchedButSty}
          onClick={()=>{
            this.props.filterWatched(true);
            this.chgBtnClr('Watched');
            }}>Watched</button>
        <button className="searchButton" style ={towtchButSty}
          onClick={()=>{
            this.props.filterWatched(false);
            this.chgBtnClr('To Watch');
            }}>To Watch</button>
        <input type="text" placeholder="Search.." onChange={(e)=>{
          this.props.searchMovie(e.target.value);
          this.chgBtnClr('');
          }}/>
      </div>
    )
  }
}

export default SearchBar;