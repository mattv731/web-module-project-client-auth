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
            })
        .catch(err => {
            console.log(err)
        })
    }
 render() {
    return (
        <div className="App">
            <h2>Your Friends List</h2>
            {
                this.state.friends.map(friend => {
                    return <p>- {friend.name} - {friend.email}</p>
                })
            }
        </div>
    )
 }
}
export default Friends;