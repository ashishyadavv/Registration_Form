import React from 'react';
import './style.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userPhone:'',
            userGender:'Male',
            userPassword:'',

        };
      }

      onFieldChange =(event) =>{
          this.setState({
              [event.target.name]: event.target.value
          })
      }
     

    // onNameChange =(event) =>{
        

    //     this.setState({
    //         userName: event.target.value
    //     })
        


    // }
    // onEmailChange =(event) =>{
    //     this.setState({
    //         userEmail: event.target.value
    //     })

    // }
    // onPhoneChange =(event) =>{
    //     this.setState({
    //         userPhone: event.target.value
    //     })

    // }
    // onGenderChange =(event) =>{
    //     this.setState({
    //         userGender: event.target.value
    //     })

    // }
    // onPasswordChange =(event) =>{
    //     this.setState({
    //         userPassword: event.target.value
    //     })

    // }
    onSubmit = () =>{

        if(this.state.userPhone === '' || this.state.userPhone.length !==10 )
        {
            window.alert("Invalid format")
            return;
        }

        window.alert(`
        Name: ${this.state.userName},
        Email: ${this.state.userEmail},
        PhoneNumber: ${this.state.userPhone},
        Gender: ${this.state.userGender},
        Password: "********",

        
        
        `);
        this.clearFormFields();
    }
clearFormFields = () =>{
    this.setState({
        userName: '',
        userEmail: '',
        userPhone:'',
        userGender:'Male',
        userPassword:'',

    })
}



    render = () => {
        return (
            <div className="Form">
                <p className="title">User Form</p>

                <input
                 name="userName"
                 onChange={this.onFieldChange}
                value={this.state.userName}
                className="input-style" type='text'
                placeholder="Enter your Name" />

                <input
                name="userEmail"
                onChange={this.onFieldChange}

                value={this.state.userEmail}
                className="input-style" type='text'
                placeholder="Enter your Email" />
                
                <input 
                name="userPhone"
                onChange={this.onFieldChange}
                value={this.state.userPhone}
                className="input-style" type='text'
                placeholder="Enter your Phone" />  

                <select 
                name="userGender"
                onChange={this.onFieldChange} 
                value={this.state.userGender}
                className="input-style">
                    <option value=''>Choose Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    
                    </select> 
                <input 
                name="userPassword"
                onChange={this.onPasswordChange} 
                value={this.state.userPassword}
                className="input-style" type='Password'
                placeholder="Enter your Password" />  
                    
            <button onClick={this.onSubmit} className="btn"> Submit</button>
            <button className="btn">Reset</button>
            </div>

    );
};


}
export default Form;