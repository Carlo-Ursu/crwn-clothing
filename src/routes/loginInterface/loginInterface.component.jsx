import { useState, useContext } from 'react';
import './loginInterface.styles.scss';
import { useNavigate } from 'react-router-dom';



import { UserContext } from "../../contexts/user.context";
import Button from '../../components/button/button.component'

const LoginInterface = () => {
    const mockUsers = [
        { username: 'user1', password: '1111' },
        { username: 'user2', password: '2222' },
        { username: 'user3', password: '3333' },
    ];

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        const matchedUser = mockUsers.find((user) => user.username === username && user.password === password);
        if (matchedUser) {
            setCurrentUser(matchedUser);
            // Redirect to the home page
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('currentUsername', matchedUser.username)
            navigate('/');


        } else {
            setError('Wrong username or password!');
        }
    };

        return (
            <div className='login'>
                <form className='form'>
                    <div className='formGroup'>
                        <label htmlFor="username" className='label'>Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='input'
                        />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor="password" className='label'>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='input'
                        />
                    </div>
                    <div className='buttons'>
                    <Button buttonType='inverted' onClick={handleSignUp}>Sign in</Button>
                    </div>
                    {error && <div className='error'>{error}</div>}
                </form>
            </div>
        );

}
export default LoginInterface;