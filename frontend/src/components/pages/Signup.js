import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup(){

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [customerImage, setCustomerImage] = useState("");
    const navigate = useNavigate();

    const onChangeFile = (e) => {
        setCustomerImage(e.target.files[0]);
      };
    
      const changeOnClick = (e) => {
        e.preventDefault();

        const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("customerImage", customerImage);

        axios.post("http://localhost:5000/customer/register", formData)
        .then(()=>{
            alert("Customer Registration successfully");

            setfirstName("");
            setlastName("");
            setEmail("");
            setPhone("");
            setPassword("");
            setCustomerImage("");
            navigate("/login");

        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div className='container'>
            <div class="card" style={{borderBlockStartColor: "#205E61", borderBlockStartWidth: "10px"}}>
                <div class="card-header">
                    <h3 style={{ color: "#205E61", fontFamily: "Abril Fatface", fontWeight: "bold" }}>Customer Registration</h3>
                </div>
                <div class="card-body">
                    <form class="row g-3 p-5" onSubmit={changeOnClick}>
                        <div class="col-md-6">
                            <label for="inputName" class="form-label">First Name</label>
                            <input type="text"
                                className="form-control"
                                name="firstName"
                                onChange={(e) => {
                                    setfirstName(e.target.value);
                                }}
                                pattern="[a-zA-Z ]*"
                                required>
                            </input>
                        </div>
                        <div class="col-md-6">
                            <label for="inputName" class="form-label">Last Name</label>
                            <input type="text"
                                className="form-control"
                                name="lastName"
                                onChange={(e) => {
                                    setlastName(e.target.value);
                                }}
                                pattern="[a-zA-Z ]*"
                                required>
                            </input>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input
                                type="Email"
                                className="form-control"
                                id="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}>
                            </input>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input
                                type="Password"
                                className="form-control"
                                name="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                required>
                            </input>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPhone" class="form-label">Contact Number</label>
                            <input
                                type="Number"
                                className="form-control"
                                name="phone"
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                pattern="[0-9]{10}"
                                required>
                            </input>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Profile Picture</label>
                            <input
                                className="form-control"
                                type="file"
                                filename="materialImage"
                                onChange={onChangeFile}>
                            </input>
                        </div>
                        
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#205E61" }}>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;