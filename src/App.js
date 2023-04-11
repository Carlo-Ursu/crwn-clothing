import './App.css';
import {Routes, Route} from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignUp from "./routes/loginInterface/loginInterface.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='shop/*' element={< Shop/>}/>
                <Route path='login' element={<SignUp/>}/>
                <Route path='checkout' element={<Checkout/>}/>
            </Route>
        </Routes>
    )
}

export default App;
