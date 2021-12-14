import React from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        axiosWithAuth()
        .get('/friends')
        .then(resp => {
            this.setState({
                friends: resp.data
                })
                console.log(this.state.friends)
            })
        .catch(err => {
            console.log(err)
        })
    }
 render() {
    return (
        <div className="App">
            {
                this.state.friends.map(friend => {
                    <p>{friend.name}</p>
                })
            }
        </div>
    )
 }
}
export default Friends;