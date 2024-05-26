import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function () {

 const[user,setUser]=useState({
    name:"",
    username:"",
    email:"",
    sem1:"",
    sem2: "",
    sem3: ""
 })
 const {id}=useParams();
 useEffect(()=>{
    loadUser()

 },[])
const loadUser=async()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
}
 return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border p-4 mt-2 shadow">
            <h2 className="text-center m-4">User Details : {user.id}</h2>
<div className="card">
    <div className="card-header">
     Detials of user id:{user.id}
     <ul className="list-group list-group-numbered " list-style-type=" ">
       
     <li classNamee="list-group-item"><b>Regn. No : </b>
       {user.username}</li>
       <li classNamee="list-group-item" list-style-type=" "> <b>Name : </b>
       {user.name}</li>
     
       <li classNamee="list-group-item"><b>Email : </b>
       {user.email}</li>
       <li classNamee="list-group-item"><b>Sem 1 : </b>
       {user.sem1}</li>
       <li classNamee="list-group-item"><b>Sem 2 : </b>
       {user.sem2}</li>
       <li classNamee="list-group-item"><b>Sem 3 : </b>
       {user.sem3}</li>
       <li classNamee="list-group-item"><b>Avgerage CGPA : </b>
       {(user.sem1 + user.sem2 + user.sem3)/3}</li>
     </ul>

    </div>
</div>

<Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>

</div>
</div>
</div>
  )
}
