import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import {setCurrentUser} from '../../store/user/user.action';

import {BaseButton} from "../../components/button/button.styles";
import {Login, Form, ButtonContainer, FormGroup, Label, Input, Error} from "./loginInterface.styles";
import {useDispatch} from "react-redux";

const LoginInterface = () => {
    const mockUsers = [
        {username: 'user1', password: '1111'},
        {username: 'user2', password: '2222'},
        {username: 'user3', password: '3333'},
    ];

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignUp = (e) => {
        e.preventDefault();

        const matchedUser = mockUsers.find((user) => user.username === username && user.password === password);
        if (matchedUser) {
            dispatch(setCurrentUser(matchedUser.username));
            // Redirect to the home page
            localStorage.setItem('currentUsername', matchedUser.username)
            navigate('/');


        } else {
            setError('Wrong username or password!');
        }
    };

    return (
        <Login>
            <Form>
                <FormGroup>
                    <Label htmlFor="username" className='label'>Username:</Label>
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='input'
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password" className='label'>Password:</Label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='input'
                    />
                </FormGroup>
                <ButtonContainer>
                    <BaseButton buttonType='inverted' onClick={handleSignUp}>Sign in</BaseButton>
                </ButtonContainer>
                {error && <Error>{error}</Error>}
            </Form>
        </Login>
    );

}
export default LoginInterface;