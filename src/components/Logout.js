import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './../utils/axiosWithAuth'

const Logout = () => {
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .post('/logout')
            .then(resp => {
                localStorage.removeItem('token');
                push('/api');
            });
    }, []);
    return(
        <div className="App">
            <h2>You have successfully logged out</h2>
        </div>
    )
}
export default Logout;