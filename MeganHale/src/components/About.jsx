import styled from "styled-components";
import megan5 from '../assets/images/MeganImages/megan5.jpg'


const About = () => {
    return (
        <AboutContainer id="about">
            <Image 
            src={megan5} 
            alt="megan-wearing-mask-hugging-dog"/>
            <BioContainer>
                <Header>Hello, I'm Megan.</Header>
                <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tortor felis. Nunc in facilisis ligula. Morbi nec ipsum ut erat porttitor fringilla. Fusce laoreet egestas sollicitudin. Curabitur ac lacinia mi, in consectetur dui. Sed mattis faucibus turpis vitae eleifend. Maecenas hendrerit urna nunc. Curabitur ac lacinia mi, in consectetur dui. Sed mattis faucibus turpis vitae eleifend. Maecenas hendrerit urna nunc
                </Paragraph>
            </BioContainer>
        </AboutContainer>    
    )
}

const AboutContainer = styled.div`
    height: 500px;
    width: 80%;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 768px){
        height: 400px;
    }
`

const BioContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (max-width: 1200px){
        width: 45%;
    }
    @media screen and (max-width: 1024px){
        width: 50%;
    }
`

const Image = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 100%;
    border: 3px solid black;
    @media screen and (max-width: 1200px){
        width: 250px;
        height: 250px;
    }
    @media screen and (max-width: 1024px){
        width: 250px;
        height: 250px;
    }
    @media screen and (max-width: 768px){
        width: 200px;
        height: 200px;
    }
    @media screen and (max-width: 480px){
        width: 175px;
        height: 175px;
    }
`

const Paragraph = styled.p`

    @media screen and (max-width: 1200px){
        font-size: 15px;
    }
    @media screen and (max-width: 1024px){
        font-size: 14px;
    }
    @media screen and (max-width: 768px){
        font-size: 11px;
    }
    @media screen and (max-width: 480px){
        font-size: 10px;
    }
`

const Header = styled.h1`
    @media screen and (max-width: 1200px){
        font-size: 22px;
    }
    @media screen and (max-width: 1024px){
        
    }
    @media screen and (max-width: 768px){
        font-size: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export default About;