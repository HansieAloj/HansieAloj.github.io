import { useState } from "react";
import '../components/Login.css';
import classes from '../components/Login.module.css';


function Register() {
    const[fullname, setFullname] = useState("");
    const[dob, setDob] = useState();
    const[phone, setPhone] = useState();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    function handleSubmit(event){
        alert(`Regitration Successful\nUsername : ${username}\nPassword : ${password}\fullname : ${fullname}\dob : ${dob}\phone : ${phone}`);
        // <AlertComponent/>
        event.preventDefault();
    }

    return(
        <div class={classes.Login}>
            <div class={classes.center}>
            
            <div class={classes.container}>
            {/* <label for="show" class="fa fa-arrow-left" title="back" onClick={(e)=>console.log("closed")}></label> */}
                <div class={classes.text}>
                    Register
                </div>
                <form action={handleSubmit}>
                    <div class={classes.data}>
                        <label>Full Name</label>
                        <input type="text" id="fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)} required/>
                    </div>                
                    <div class={classes.data}>
                        <label>Date of Birth</label>
                        <input type="date" id="dob" value={dob} onChange={(e)=>setDob(e.target.value)} required/>
                    </div>                
                    <div class={classes.data}>
                        <label>Phone</label>
                        <input type="number" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                    </div>
                    <div class={classes.data}>
                        <label>Username</label>
                        <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                    </div>
                    <div class={classes.data}>
                        <label>Password</label>
                        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
                    {/* <div class="forgot-pass">
                    <a href="#">Forgot Password?</a></div> */}
                <div class={classes.btn}>
                <div class={classes.inner}>
                        </div>
                        <button type="submit">Sign Up</button>
                    </div>
                    <div class={classes.signupLink}>
                        Already a member? <a href="#">Login</a>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Register;