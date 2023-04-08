import './App.css';
import './categories.style.scss';
import {Routes, Route} from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignUp from "./routes/loginInterface/loginInterface.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                        <Route index element={<Home />}/>
                        <Route path ='shop' element={< Shop/>}/>
                        <Route path ='login' element={<SignUp />}/>
            </Route>
        </Routes>
    )
}

export default App;
