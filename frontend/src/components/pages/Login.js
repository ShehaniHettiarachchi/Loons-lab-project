import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


function Login(){

    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError]= useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/customer/login"
            const { data:res } = await axios.post(url, data);
            alert("Login successful");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("uID", res.data.customer._id);
            localStorage.setItem("email", res.data.customer.email);

            navigate("/profile");
            console.log(res.message);
        } catch (error) {
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
            ) {
              alert("Login Failed, Please Check Your Email and Password");
              setError(error.response.data.message);
            }
          }
        };

      

    return(
        <div className='container col-md-6  '>
           
            <div class="card " style={{borderBlockStartColor: "#205E61", borderBlockStartWidth: "10px"}}>
                <div class="card-header">
                    <h3 style={{ color: "#205E61", fontFamily: "Abril Fatface", fontWeight: "bold" }}>Customer Login</h3>
                </div>
                <div class="card-body ">
                    <form class="row g-3 p-5 " onSubmit={handleSubmit}>
                        
                        <div class="mb-3">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input 
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={handleChange}
                                value={data.email}>
                            </input>
                        </div>
                        <div class="mb-3">
                            <label for="inputEmail4" class="form-label">Password</label>
                            <input
                                type="Password"
                                className="form-control"
                                name="password"
                                onChange={handleChange}
                                value={data.password}>
                            </input>
                        </div>
                        
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#205E61", width: "25%" }}>Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

       
    );
}

export default Login;