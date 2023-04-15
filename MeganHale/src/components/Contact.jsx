import styled from "styled-components";
import megan1 from '../assets/images/MeganImages/megan1.jpg';
import megan3 from '../assets/images/MeganImages/megan3.jpg';
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleChange(e){
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    return (
        <ContactContainer id="contact">
            <Image src={megan1} alt="megan-giving-thumbs-up-grayscaled"/>
            <Form>
                <Input 
                type="text" 
                name="name"
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleChange}/>
                <Input 
                type="text" 
                name="email"
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleChange}/>
                <MessageInput 
                type="text" 
                name="message"
                placeholder="Message" 
                value={formData.message}
                onChange={handleChange}/>
                <Button>Send</Button>
            </Form>
            <Image src={megan3} alt="megan-running-with-excited-dog-grayscaled"/>
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
    height: 520px;
    display: flex;
`

const Image = styled.img`
    height: 100%;
    width: 35%;
`

const Form = styled.form`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    font-size: 14px;
`

const Input = styled.input`
    width: 50%;
    height: 40px;
    outline: none;
    border-radius: 24px;
    border: 2px solid black;
    text-indent: 12px;
    font-family: inherit;
    font-size: inherit;
    
`

const MessageInput = styled.textarea`
    width: 50%;
    height: 150px;
    border-radius: 24px;
    outline: none;
    border: 2px solid black;
    text-indent: 16px;
    padding: 15px;
    font-family: inherit;
    font-size: inherit;
`

const Button = styled.button`
    width: 50%;
    height: 40px;
    background-color: black;
    color: white;
    outline: none;
    border: none;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    &:hover{
        cursor: pointer;
        background-color: white;
        color: black;
        border: 2px solid black;
    }
`

export default Contact;