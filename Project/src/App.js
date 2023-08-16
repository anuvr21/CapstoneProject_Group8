import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage.js';
import UserRegistration from './components/UserRegistration';
import './components/Homepage.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

   <Routes>

    {/* <Route path="/" element={<HomePage />} /> */}
    <Route exact path="/" component={<Homepage/>} />
    <Route path="/UserRegistration" component={<UserRegistration/>} />


   </Routes>

  </BrowserRouter>
  );
}

export default App;
