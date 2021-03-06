import React, { Component } from 'react';

class Artist extends Component{

  constructor(props) {
      super(props);
      this.state = {
          showAllArtists: this.props.showAllArtists
      };
  }

  render(){
    let name = this.props.currentArtist ? <span>{this.props.currentArtist.name}</span>: <span>{this.props.artist.name}</span>
    let bio = this.props.currentArtist ? <span>{this.props.currentArtist.bio}</span>: <span>{this.props.artist.bio}</span>
    let hometown = this.props.currentArtist ? <span>{this.props.currentArtist.hometown}</span>: <span>{this.props.artist.hometown}</span>
    let image = this.props.currentArtist ?
      <img style={{"height" : "100px", "width" : "100px"}} src={this.props.currentArtist.image_url} alt="Artist"/> :
      <img style={{"height" : "100px", "width" : "100px"}} src={this.props.artist.image_url} alt="Artist"/>
    return(
          <div className="artist-container">
            {!this.props.currentArtist ?
              <div className ='row'>
                <div className='col-sm-12'>
                  <h5><b>{name}</b></h5>
                  {image}
                </div>
                <div className='col-sm-12'>
                  <button className='black-btn' onClick={() => this.props.selectArtist(this.props.artist.id)}>Select</button>
                </div>
              </div>
            :
              <div >
                <button className='black-btn' onClick={() =>this.props.toggleAllArtists()}>Back to All Artists</button>
                <div className ='row'>
                  <div className='text-center'>
                    {image}
                  </div>
                </div>
                <div className ='row'>
                  <div className='text-center'>
                    <h4><b>{name}</b></h4>
                  </div>
                </div>
                <div className ='row'>
                  <h5>BIO: {bio}</h5>
                  <h5>HOMETOWN: {hometown}</h5>
                </div>
                <button className='black-btn' onClick={() =>this.props.handleDeleteArtist(this.props.currentArtist.id)}>Delete</button>
              </div>
            }
        </div>
        )
      }
    }

export default Artist
