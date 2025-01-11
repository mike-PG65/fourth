import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Register(){

    const [formData, setformData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        username:'',
        password:'',
        confirmPassword:''
    });
    const navigate = useNavigate();


    const handleChange=(event)=>{
        const { name, value }=event.target;
        setformData({
            ...formData,
            [name] : value,
        });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();

        let errors=[]
        let isValid = true

        if(!formData.firstName){
            errors.push("The First Name is required")
            isValid=false
        }

        if(!formData.lastName){
            errors.push("The last name is required")
            isValid=false
        }

        if(!formData.email){
            errors.push("The email is required")
            isValid=false
        }

        if (!formData.username){
            errors.push("The username is required")
            isValid=false
        }

        if (!formData.password){
            errors.push("The password is required")
            isValid=false
        }

        if (!formData.confirmPassword){
            errors.push("The username is required")
            isValid=false
        }

        if(formData.password !== formData.confirmPassword){
            errors.push("Passwords do not match")
        }

        if (!isValid){
            alert(errors.join('\n'));

        }else{
            // alert(`Welcome ${formData.username}`)
            localStorage.setItem('user', JSON.stringify(formData))
            navigate('/login')


            setTimeout(() => {
                alert(`Welcome ${formData.username}`);
              }, 500); // Delay alert so that navigation happens first
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />

<input
                type="text"
                placeholder="Enter your Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />

<input
                type="email"
                placeholder="Enter your Email name"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />

<input
                type="text"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />

<input
                type="password"
                placeholder="Enter your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />

<input
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                />

<button type="submit">Submit</button>
            </form>
            
        </div>
    );
};

export default Register;