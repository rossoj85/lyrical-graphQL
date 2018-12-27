import React, {Component} from 'react';
import gql from 'graphQL-tag';
import {graphql} from 'react-apollo'
 
class LyricCreate extends Component{
    constructor(props){
        super(props);
        this.state = {content:''};
    }
    onSubmit(event){
        console.log('Form submit firing')
        event.preventDefault();
        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            }
        })
        .then( ()=> this.setState({content:''}));
    }
    render(){
        console.log('content', this.state.content)
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a Lyric</label>
                <input 
                onChange= {evt =>this.setState({content: evt.target.value})}
                value = {this.state.content}
                type = "text"
                />
            </form>
        )
    }
}

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId: ID){
  addLyricToSong(content:$content, songId: $songId){
    id
    title
    lyrics{
      content
    }
  }
}
`;
export default graphql(mutation)(LyricCreate);