import React, {Component} from 'react';
import gql from 'graphQL-tag';
import { graphQL, graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchsongs'


 class Songlist extends Component{

    onSongDelete(id){
        console.log('Delete clicked')
        this.props.mutate( { 
            variables:{id},
            refetchQueries: [{query}]
        })
    }
    renderSongs(){
        return this.props.data.songs.map(({id, title})=>{
            return(
                <div key={id}>
                    <li className="collection-item">
                        {title}
                        <i className='material-icons' onClick ={()=>this.onSongDelete(id)}> delete </i> 
                    </li>
                </div>
            )
        })
    }
    render(){
       if(this.props.data.loading) {return <div>Loading...</div>};
        return(
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link to='songs/new'
                    className= "btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        
        )
    }
}

//since we only gonan use this mutation in this file, lets just define it here
const mutation = gql`
    mutation DeleteSong($id: ID){
        deleteSong(id:$id){
            id
    }
}
`;

export default graphql(mutation)(
graphql(query) (Songlist)
);