import { useState } from "react";
import { NavLink } from "react-router-dom";
// import '../components/Login.css';
import classes from '../components/Login.module.css';


// import AlertComponent from './Alert'


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        alert(`Username : ${username}\nPassword : ${password}\nLogin Successful!`);
        // <AlertComponent/>
        event.preventDefault();
    }

    return (
            <div class={classes.Login}>

                {/* <div class={classes.center}> */}

                    <div class={classes.container}>
                        {/* <label for="show" class="fa fa-arrow-left" title="back" onClick={(e)=>console.log("closed")}></label> */}
                        <div class={classes.text}>Login</div>
                        {/* <form action={handleSubmit}> */}
                        <form>
                            <div class={classes.data}>
                                <label>Username</label>
                                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            </div>
                            <div class={classes.data}>
                                <label>Password</label>
                                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div class={classes.forgotPass}>
                                <a href="#">Forgot Password?</a></div>
                            <div class={classes.btn}>
                                <div class={classes.inner}>
                                </div>
                                <NavLink to="/"><button type="submit">login</button></NavLink>
                            </div>
                            <div class={classes.signupLink}>
                                Not a member? <NavLink to="/register">Signup now</NavLink></div>

                        </form>
                    </div>
                {/* </div> */}
            </div>

    );
}

export default Login;