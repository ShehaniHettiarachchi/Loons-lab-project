import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';

function UserProfile() {

    const [customer, setCustomer] = useState([]);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

      //  const id = localStorage.getItem("uID");
      //  console.log(id);
        useEffect(() => {
            const id = localStorage.getItem("uID");

            axios
            .get(`http://localhost:5000/customer/getCustomer/${id}`,customer)
            .then((res) => [
              //  console.log(res.data.customer.firstName),
                setfirstName(res.data.customer.firstName),
                setlastName(res.data.customer.lastName),
               setEmail(res.data.customer.email),
               setPhone(res.data.customer.phone),
                
            ])
            .catch((error) => console.log(error));
        }, []);

    const logout = ()=> {
        localStorage.removeItem("token");
        localStorage.removeItem("uID");
        localStorage.removeItem("email");
        navigate("/");
    }
    return (
        <div className='container'>
              
            <div class="card" style={{borderBlockStartColor: "#205E61", borderBlockStartWidth: "10px"}}>
                <div class="card-header">
                    <h3 style={{ color: "#205E61", fontFamily: "Abril Fatface", fontWeight: "bold" }}>My Profile</h3>
                </div>
                <div class="card-body">
                    <form class="row">
                        
                        <img class="rounded" style={{height:"25%", width: "25%"}}  src="https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"></img>
                      
                        <div class="row">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">First Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="firstName"
                                    placeholder="firstName"
                                    value={firstName}
                                    readOnly
                                >
                                        
                                </input>
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Last Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="lastName"
                                    placeholder="lastName"
                                    value={lastName}
                                    readOnly
                                >
                                </input>
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="Email"
                                    placeholder="Email"
                                    value={email}
                                    readOnly
                                >
                                </input>
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Contact Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="Contact Number"
                                    placeholder="Contact Number"
                                    readOnly
                                    value={phone}
                                >
                                </input>
                            </div>
                            <div class="col-12 md-4">
                                <button class="btn btn-primary" onClick={logout} style={{ backgroundColor: "#205E61", width: "25%", paddingTop: "5px" }}>Logout</button>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;