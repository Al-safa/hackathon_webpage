import React, {useState, useEffect } from 'react';
import "./RegisterStyles.css"
import FormInput from "../components/FormInput";
import axios from 'axios';

const Register = () => {
  const url = "https://web-it-like-spider.onrender.com/hackathon/register/"
  const [success, setSuccess] = useState(0);
  const [values,setValues]=useState({ 
    teamname : "",
    member1name : "",
    member1department : "",
    member1phonenumber : "",
    member1email : "",
    member1regno : "",
    member2name : "",
    member2department : "",
    member2phonenumber : "",
    member2email : "",
    member2regno : "",
    member3name : "",
    member3department : "",
    member3phonenumber : "",
    member3email : "",
    member3regno : "",
  });
  const inputs = [
    {
      id:1,
      name:"teamname",
      type:"text",
      placeholder:"Team Name",
      errorMessage:"Team Name should be unique that includes any special character!",
      label:"Team Name",
      /*pattern: "^[A-Za-z0-9][!@#$%^&8-_\/:;.,<>+=|~`(){}[]]{3,16}$",*/
      required:true,
    },
    {
      id:2,
      name:"member1name",
      type:"text",
      placeholder:"Member 1 Name",
      errorMessage:"Enter characters that doesn't include any special character!",
      label:"Member 1 - Name",
      pattern: "^[A-Za-z]+$",
      required:true,
    },
    {
      id:3,
      name:"member1department",
      type:"text",
      placeholder:"Member1 Department",
      label:"Member 1 - Department"
    },
    {
      id:4,
      name:"member1phonenumber",
      type:"text",
      placeholder:"Member1 PhoneNumber",
      errorMessage:"Enter only 10 digits!",
      label:"Member 1 - Mobile No",
      pattern: "^[0-9]{10}$",
      required:true,
    },
    {
      id:5,
      name:"member1email",
      type:"email",
      placeholder:"Member1 Email",
      errorMessage:"It should be a valid email address!",
      label:"Member 1 - Email",
      required:true,
    },
    {
      id:6,
      name:"member1regno",
      type:"text",
      placeholder:"Member1 RegNo",
      label:"Member 1 - Registration No"
    },
    {
      id:7,
      name:"member2name",
      type:"text",
      placeholder:"Member2 Name",
      errorMessage:"Enter characters that doesn't include any special character!",
      label:"Member 2 - Name",
      pattern: "^[A-Za-z]+$",
      required:true,
    },
    {
      id:8,
      name:"member2department",
      type:"text",
      placeholder:"Member2 Department",
      label:"Member 2 - Department"
    },
    {
      id:9,
      name:"member2phonenumber",
      type:"text",
      placeholder:"Member2 PhoneNumber",
      errorMessage:"Enter only 10 digits!",
      label:"Member 2 - Mobile No",
      pattern: "^[0-9]{10}$",
      required:true,
    },
    {
      id:10,
      name:"member2email",
      type:"email",
      placeholder:"Member2 Email",
      errorMessage:"It should be a valid email address!",
      label:"Member 2 - Email",
      required:true,
    },
    {
      id:11,
      name:"member2regno",
      type:"text",
      placeholder:"Member2 RegNo",
      label:"Member 2 - Registration No"
    },
    {
      id:12,
      name:"member3name",
      type:"text",
      placeholder:"Member3 Name",
      errorMessage:"Enter characters that doesn't include any special character!",
      label:"Member 3 - Name",
      pattern: "^[A-Za-z]+$",
      required:true,
    },
    {
      id:13,
      name:"member3department",
      type:"text",
      placeholder:"Member3 Department",
      label:"Member 3 - Department"
    },
    {
      id:14,
      name:"member3phonenumber",
      type:"text",
      placeholder:"Member3 PhoneNumber",
      errorMessage:"Enter only 10 digits!",
      label:"Member 3 - Mobile No",
      pattern: "^[0-9]{10}$",
      required:true,
    },
    {
      id:15,
      name:"member3email",
      type:"email",
      placeholder:"Member3 Email",
      errorMessage:"It should be a valid email address!",
      label:"Member 3 - Email",
      required:true,
    },
    {
      id:16,
      name:"member3regno",
      type:"text",
      placeholder:"Member3 RegNo",
      label:"Member 3 - Registration No"
    }
  ]
  
  const handleSubmit = async (e)=>{
    e.preventDefault();

  
    await axios.post(url,{
    team_name : values.teamname,
    team_member_1_name : values.member1name,
    team_member_1_department : values.member1department,
    team_member_1_phone : values.member1phonenumber,
    team_member_1_email : values.member1email,
    team_member_1_register_number : values.member1regno,
    team_member_2_name : values.member2name,
    team_member_2_department : values.member2department,
    team_member_2_phone : values.member2phonenumber,
    team_member_2_email : values.member2email,
    team_member_2_register_number : values.member2regno,
    team_member_3_name : values.member3name,
    team_member_3_department : values.member3department,
    team_member_3_phone : values.member3phonenumber,
    team_member_3_email : values.member3email,
    team_member_3_register_number : values.member3regno,
     })
     .then(res => {
      console.log(res.data)
      setSuccess(1)
      
      
      })
      .catch(error => {
        setSuccess(-1)
      })
  };

  const onChange = (e) =>{
    setValues({...values,[e.target.name] : e.target.value });
    console.log(values);
  };
  
  return(
    <div className="register">
      <video src="/videos/video2.mp4" autoPlay loop muted/>
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        {inputs.map((input) => (
          <FormInput 
          key={input.id} 
          {...input} 
          value={values[input.name]} 
          onChange={onChange}
        />
        ))}
        <div className='message'>
          {success == 1 && (
            <p>Your Team has been Registered Successfully</p>
          )}
          {success == -1 && (
            <p>Registration Unsuccessful<br/>(One or more members already Registered)</p> 
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register
