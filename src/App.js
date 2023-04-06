import './App.css';
import './categories.style.scss';
import {Routes, Route} from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignUp from "./routes/sign-up/sign-up.component";


const Shop = () => {
    return <h1>I am the shop component</h1>
}

const App = () => {

    return (
        <Routes>
                <Route path='/' element={<SignUp />}/>
                    <Route path='nav' element={<Navigation />}>
                        <Route index element={<Home />}/>
                        <Route path = 'shop' element={<Shop />}/>
                    </Route>
        </Routes>
    )
}

export default App;
