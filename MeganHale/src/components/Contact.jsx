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

    function handleSubmit(e){
        e.preventDefault();
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    return (
        <ContactContainer id="contact">
            <Anchor 
            href="https://www.timesunion.com/news/article/Grondahl-Triathlete-Megan-Hale-wanted-to-prove-17392607.php"
            target="_blank"
            rel="noopener noreferrer">
                <Image src={megan1} alt="megan-giving-thumbs-up"/>
            </Anchor>
            <Form onSubmit={handleSubmit}>
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
            <Anchor 
            href="https://www.timesunion.com/news/article/Grondahl-Triathlete-Megan-Hale-wanted-to-prove-17392607.php"
            target="_blank"
            rel="noopener noreferrer">
                <Image src={megan3} alt="megan-running-with-excited-dog"/>
            </Anchor>
            
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
    height: 520px;
    display: flex;
`
const Anchor = styled.a`
    height: 100%;
    width: 35%;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    &:hover{
        filter: grayscale(70%) brightness(80%) contrast(100%);
    }
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
    border-radius: 8px;
    border: 2px solid black;
    text-indent: 12px;
    font-family: inherit;
    font-size: inherit;
    
`

const MessageInput = styled.textarea`
    width: 50%;
    max-width: 80%;
    height: 150px;
    max-height: 225px;
    border-radius: 8px;
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