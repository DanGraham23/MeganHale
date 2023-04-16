import styled from "styled-components";
import megan1 from '../assets/images/MeganImages/megan1.jpg';
import megan3 from '../assets/images/MeganImages/megan3.jpg';
import {BsFillSendFill} from 'react-icons/bs';
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
                <ArticleHeader className="text">Blind woman conquers Ironman Lake Placid...</ArticleHeader>
            </Anchor>
            <Form onSubmit={handleSubmit}>
            <FormHeader>Get in Touch</FormHeader>
                <Input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}/>
                <Input 
                type="text" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}/>
                <MessageInput 
                type="text" 
                name="message"
                placeholder="Message" 
                value={formData.message}
                onChange={handleChange}/>
                <Button><BsFillSendFill/>Send</Button>
            </Form>
            <Anchor 
            href="https://infotel.ca/newsitem/guide-dogs-helping-blind-runners-stay-fit-despite-pandemic/it75456"
            target="_blank"
            rel="noopener noreferrer">
                <Image src={megan3} alt="megan-running-with-excited-dog"/>
                <ArticleHeader className="text">Guide dogs helping blind runners stay fit...</ArticleHeader>
            </Anchor>
            
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
    height: 520px;
    display: flex;
    background-color: white;
    color: black;
`
const FormHeader = styled.h1`
    
`

const ArticleHeader = styled.h1`
    position: absolute;
    top: 30%;
    left: 15%;
    display: none;
    color: white;
    text-decoration: underline 1px white;
    text-underline-offset: 5px;
`

const Anchor = styled.a`
    height: 100%;
    width: 35%;
    position: relative;
    display: inline-block;
    &:hover .text {
        display: block;
    }
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    &:hover{
        filter: grayscale(80%) brightness(70%) contrast(100%);
    }
`

const Form = styled.form`
    width: 25%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    font-size: 14px;
    border: 1px solid #c9c9c9;
    margin: auto;
`

const Input = styled.input`
    width: 50%;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    text-indent: 23px;
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
    border: 1px solid black;
    text-indent: 8px;
    padding: 15px;
    font-family: inherit;
    font-size: inherit;
`

const Button = styled.button`
    width: 25%;
    height: 40px;
    background-color: #0000ff;
    color: white;
    outline: none;
    border: none;
    border-radius: 36px;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    &:hover{
        cursor: pointer;
        background-color: #6d6dff;
    }
`

export default Contact;