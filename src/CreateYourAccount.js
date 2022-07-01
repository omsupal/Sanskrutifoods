import React, { Component } from 'react';
import './CreateYourAccount.css'
import { auth, createUserDocument } from "./firebase";
import { Link } from "react-router-dom";
import image1 from './assets/logo.png';
// import emailjs from 'emailjs-com';
class CreateYourAccount extends Component {
    state = { displayName: '', email: '', password: '', address: '', NUM: '' };

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, displayName, address, NUM } = this.state;
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            console.log(user);
            await createUserDocument(user, { displayName }, { address }, { NUM });
        } catch (error) {
            console.log('error', error);
        }

        this.setState({ displayName: '', email: '', password: '', address: '', NUM: '' });
    };

    render() {
        const { displayName, email, password, address, NUM } = this.state;
        return (
            <div className='login'>
                <Link to='/'>
                    <img
                        className="login__logo"
                        src={image1}
                        alt="Second slide"
                    />
                </Link>

                <div className='login__container'>
                    <h3>Enter Your Details</h3>

                    <form onSubmit={this.handleSubmit}>
                        <h5>Full Name</h5>
                        <input type='name' name="displayName" value={displayName} onChange={this.handleChange} />
                        <h5>Mobile Number</h5>
                        <input type='NUM' name="NUM" value={NUM} onChange={this.handleChange} />

                        <h5 className='register_address'>Address</h5>
                        <input type='address' name="address" value={address} onChange={this.handleChange} />

                        <h5>E-mail</h5>
                        <input type='email' name="email" value={email} onChange={this.handleChange} />

                        <h5>Password</h5>
                        <input type="password" name="password" value={password} onChange={this.handleChange} />

                        <button className='login__signInButton'>Create Account</button>
                    </form>
                </div>
            </div >

        )
    }
}

export default CreateYourAccount
