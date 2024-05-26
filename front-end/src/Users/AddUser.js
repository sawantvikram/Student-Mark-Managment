import axios from 'axios';
import React,{useState} from 'react'
import {Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate()

const [user,setUser] = useState({
    name:"",
    username:"",
    email:"",
    sem1: "",
    sem2: "",
    sem3: ""
})

const{name,username,email,sem1,sem2,sem3}=user

const onInputChange=(e)=>{

    setUser({...user,[e.target.name]:e.target.value});

};

const onSubmit=async(e)=>{
   e.preventDefault();
   await axios.post("http://localhost:8080/user",user)
   navigate("/")

}

  return <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register User</h2>

                <form onSubmit={(e)=>onSubmit(e)}  >
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Regn. No
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your name"
                    name="username"
                    value={username}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your Username"
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        E-mail
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your e-mail address"
                    name="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Sem 1  
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Sem 1 Marks"
                    name="sem1"
                    value={sem1}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                    Sem 2 
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Sem 2 Marks"
                    name="sem2"
                    value={sem2}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                    Sem 3
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Sem 3 Marks"
                    name="sem3"
                    value={sem3}
                    onChange={(e)=>onInputChange(e)}/>
                </div>


                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>

            </div>
        </div>
    </div>
  
}
