import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphQL-tag';



class SongCreate extends Component {
    constructor(props){
        super(props);
        this.state={
            title: ''
        }
    }
    onSubmit(evt){
        evt.preventDefault();
        console.log('SUBMIt FIRED')
        this.props.mutate({
            variables: {
                title: this.state.title
            }
        });
        this.setState({title:''})
        
    }
    render(){
       console.log(this.state.title)
        return(
            <div className>
                <h3>Create a new SOng</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label><h5>Song Title:</h5></label>
                    <input 
                        onChange={event =>this.setState({title: event.target.value})}
                        value={this.state.title}
                    />
                </form>
            </div>
        )
    }
}

const mutation =gql`
    mutation AddSong($title: String){
        addSong(title: $title){
           title
        }
    }
`;
export default graphql(mutation) (SongCreate)