import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddFriends = () => {
    const { push } = useHistory();
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: '',
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    console.log(form)

    const handleSubmit = e => {
        e.preventDefault();1
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
        .then(resp => {
            push('/friends')
        })
        .catch(err => {
            console.log(err)
        })
}

        return (
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <label>Friend Name</label>
                    <input 
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                    />
                    <label>Friend Email</label>
                    <input 
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                    />
                    <button>Submit</button>
                </form>

            </div>
        )
    }

export default AddFriends;