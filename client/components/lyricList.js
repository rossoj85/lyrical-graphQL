import React, { Component } from 'react'
import gql from 'graphQL-tag';
import {graphql} from 'react-apollo'

class LyricList extends Component{
    
    
    onLike(id, likes){
        this.props.mutate({
            variables: {id},
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id,
                    __typname: 'LyricType',
                    likes: likes +1
                }
            }
        })
    }
    render(){
        console.log('lyrics List', this.props.lyricsArray)
        return (
            <ul className='collection'>
                {
                    this.props.lyricsArray.map( ({id,content, likes} )=>{
                        console.log('likes', likes)
                        return(
                            <li key={id} className ='collection-item'>
                                {content}
                                <div className="vote-box">
                                    <i className="material-icons" onClick={()=>this.onLike(id, likes)} >thumb_up</i>
                                    {likes}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

        )
    }
}
const mutation = gql`
    mutation LikeLyric($id: ID){
  likeLyric(id:$id){
    id
    likes
  }
}
`;

export default graphql(mutation)(LyricList)