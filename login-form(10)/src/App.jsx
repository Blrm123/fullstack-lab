import { useState } from 'react'
import './App.css'
import { SignUp } from './components/signup';
import { Login } from './components/login';

function App() {
  const [isLogin, setIsLogin] = useState('');

  return (
    <div>
      {isLogin ? 
      (<Login onSwitch={()=> setIsLogin(false)}/>):
      (<SignUp onSwitch={()=> setIsLogin(true)}/> ) }
    </div>
  );
}

export default App
