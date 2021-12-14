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
                push('/api/login');
            });
    }, []);
    return(
        <div>
            <h3>You have successfully logged out</h3>
        </div>
    )
}
export default Logout;