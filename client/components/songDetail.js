import React, {Component} from 'react';
import {Link} from 'react-router';
import fetchSong from '../queries/fetchSong';
import {graphql} from 'react-apollo';
import LyricCreate from './lyricCreate';
import LyricList from './lyricList'
import songlist from './songlist';

class SongDetail extends Component{

    render(){
        console.log(Link)
        const {song} = this.props.data
        console.log(song)
        console.log('song Detail PropSSS',this.props.params.id)
        if(!song) {return <div>Loading . . .</div>;}
        return(
            <div>
                <Link to='/'>Back</Link>
                <h1>{song.title}</h1>
                <LyricList lyricsArray={song.lyrics}/>
                <LyricCreate  songId={this.props.params.id}/>
            </div>
        );
        

    }
}

export default graphql(fetchSong,{
    options: (props) =>{return {variables: {id: props.params.id}}}
})(SongDetail);