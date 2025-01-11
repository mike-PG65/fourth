import React, {useState} from 'react'


function Login(){
    const [formData, setformData]=useState({
        username:'',
        email:'',
        password:''
    });
    const [message, setMessage]=useState('')

    const handleChange=(event)=>{
        const {name, value}=event.target
        setformData({
            ...formData,
            [name]:value
        });
    };

    const handleSubmit=(event)=>{
        event.preventDefault()


        const storedUser=JSON.parse(localStorage.getItem('user'))


        if (
            storedUser &&
            storedUser.username === formData.username &&
            storedUser.email === formData.email &&
            storedUser.password === formData.password 
        ) {
            setMessage('Login Sucessfull')
        }else{
            setMessage('Invalid email,username or password')
        }       
    }


    return(

        <div>
            <form onSubmit={handleSubmit}>
                <input
                placeholder='Enter your username'
                type='text'
                name='username'
                value={formData.username}
                onChange={handleChange}
                />

                <input
                placeholder='Enter your email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                />

                <input
                placeholder='Enter your password'
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                />

                <button type="submit">Login </button>

            </form>
            {message && <p>{message}</p>}

        </div>
    )

}

export default Login;