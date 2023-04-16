import styled from "styled-components";
import megan5 from '../assets/images/MeganImages/megan5.jpg'


const About = () => {
    return (
        <AboutContainer id="about">
            <Image 
            src={megan5} 
            alt="megan-wearing-mask-hugging-dog"/>
            <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tortor felis. Nunc in facilisis ligula. Morbi nec ipsum ut erat porttitor fringilla. Fusce laoreet egestas sollicitudin. Curabitur ac lacinia mi, in consectetur dui. Sed mattis faucibus turpis vitae eleifend. Maecenas hendrerit urna nunc. Curabitur ac lacinia mi, in consectetur dui. Sed mattis faucibus turpis vitae eleifend. Maecenas hendrerit urna nunc
            </Paragraph>
        </AboutContainer>    
    )
}

const AboutContainer = styled.div`
    height: 500px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
`

const Image = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 100%;
`

const Paragraph = styled.p`
    width: 30%;
`

export default About;