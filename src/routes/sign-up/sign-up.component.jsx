import { useState } from 'react';
import './sign-up.styles.scss';
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import LoadingSpinner from "./sign-up-loading/sign-up-loading.component";

const SignIn = () => {
    const mockUser = { username: 'username', password: '123pass' };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSignIn = (e) => {
        e.preventDefault();

        if (username === mockUser.username && password === mockUser.password) {
            // Redirect to the home page
            window.location.href = '/nav';
            localStorage.setItem('isLoggedIn', true);
        } else {
            setError('Invalid username or password');
        }
    };
    if(localStorage.getItem('isLoggedIn')){
            setTimeout(() => window.location.href = '/nav', 3000)
            return (
                <LoadingSpinner />
            );
    }
    else {
        return (
            <div className='signIn'>
                <CrwnLogo className='logo'/>
                <form onSubmit={handleSignIn} className='form'>
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
                    {error && <div className='error'>{error}</div>}
                    <button type="submit" className='button'>Sign In</button>
                </form>
            </div>
        );
    };

}
export default SignIn;