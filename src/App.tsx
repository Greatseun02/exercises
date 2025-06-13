
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import SwitcherCreateProvider from './context/SwitcherCreate';
import UserContext from './context/UserContext';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
 
// Simple page components



function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                        <SwitcherCreateProvider>
                            <Home/>
                        </SwitcherCreateProvider>
                    }
                />
                <Route
                    path='/login'
                    element = {
                        <UserContext>
                            <Login/>
                        </UserContext>
                    }
                />
                <Route
                    path='/dashboard'
                    element = {
                        <UserContext>
                            <Dashboard/>
                        </UserContext>
                    }
                />
            </Routes>
        </BrowserRouter>

    );

}
 
export default App;
 