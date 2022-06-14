import { useState, useEffect } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form>
            <label htmlFor="email">
                <span>Email: </span>
            
            </label>
        
        </form>
    )
}
export default Login