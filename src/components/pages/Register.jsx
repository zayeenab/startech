import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import EcomContext from '../../context/EcomContext'

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {showAndHide} = useContext(EcomContext);

    const redirect = useNavigate();

    const registerHandler = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch("https://startech-ecom-api-t2fv.onrender.com/api/register",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phone,
                    email,
                    password,
                    confirmPassword,
                })
            })

            const data = await res.json();
            if (data === "exist") {
                showAndHide("error", "User Already Exist")
            } else if (data === "do not match") {
                showAndHide("error", "Password do not match")
            } else if (data === "invalid password" ) {
                showAndHide("error", "Password must be atleast 8 characters long and must contain one number and one letter")
            } else {
                redirect ("/login")
                showAndHide("success", "You have successfully registered")
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='my-[5%] mx-[30%]'>
        <h1 className='text-center mb-[10px] text-2xl font-bold text-blue-950'>Register Here</h1>
        <form onSubmit={registerHandler}>

            <div className='mb-3'>
                <input type="text" 
                className="w-full p-[10px] border-b-[1px] shadow-sm border-stone-500" 
                placeholder='First Name' 
                onChange={(e)=> setFirstName(e.target.value)}/>
            </div>

            <div className='mb-3'>
                <input type="text" 
                className="w-full p-[10px] border-b-[1px] shadow-sm border-stone-500" 
                placeholder='Last Name'
                onChange={(e)=> setLastName(e.target.value)}/>
            </div>

            <div className='mb-3'>
                <input type="text" 
                className="w-full p-[10px] border-b-[1px] shadow-sm border-stone-500" 
                placeholder='Phone Number'
                onChange={(e)=> setPhone(e.target.value)}/>
            </div>

            <div className='mb-3'>
                <input type="email" 
                className="w-full p-[10px] border-b-[1px] shadow-sm border-stone-500" 
                placeholder='Email Address'
                onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className='mb-3'>
                <input type="password" 
                className="w-full p-[10px] border-b-[1px] shadow-sm border-stone-500" 
                placeholder='Password'
                onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            <div className='mb-3'>
                <input type="password" 
                className="w-full p-[10px] border-b-[1px] shadow-sm border-stone-500"
                placeholder='Re-Confirm Password'
                onChange={(e)=> setConfirmPassword(e.target.value)}/>
            </div>

            <div className='my-[3%]'>
                <button className='bg-blue-950 text-white rounded-lg p-[10px]'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default Register