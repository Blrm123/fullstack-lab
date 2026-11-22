import {useState} from 'react'

export function Login({onSwitch}){
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Logged in successfully with " + email);
        onSwitch();
    }
    return (
        <div>
            <h2>Welcome Back</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                placeholder='Enter your Email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
                /><br></br>

                <input
                type="text"
                placeholder='Enter your password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
                /><br></br>

                <button type="submit">Submit</button>
            </form>

            <p>Dont have an account
                <button type="button" onClick={onSwitch}>Sign Up</button>
            </p>
        </div>
    );
}