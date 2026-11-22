import {useState} from 'react'
export function SignUp({onSwitch}){
    const [name,setName]=useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Account created successfully for "+ name);
        onSwitch();
    };

    return (
        <div>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                /><br></br>

                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                /><br></br>

                <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                /><br></br>

                <button type="submit">Sign up</button>
            </form>

            <p>Already have an account
                <button type="submit" onClick={onSwitch}>Login</button>
            </p>

        </div>
    );
}