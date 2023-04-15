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
                <Input 
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
    filter: grayscale(90%) brightness(60%) contrast(100%);
`

const Form = styled.form`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    width: 50%;
    height: 40px;
`

const Button = styled.button`
    width: 50%;
    height: 40px;
    &:hover{
        cursor: pointer;
    }
`

export default Contact;