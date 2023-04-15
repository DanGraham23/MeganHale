import styled from "styled-components";
import megan5 from '../assets/images/MeganImages/megan5.jpg'


const About = () => {
    return (
        <AboutContainer id="about">
            <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tortor felis. Nunc in facilisis ligula. Morbi nec ipsum ut erat porttitor fringilla. Fusce laoreet egestas sollicitudin. Curabitur ac lacinia mi, in consectetur dui. Sed mattis faucibus turpis vitae eleifend. Maecenas hendrerit urna nunc
            </Paragraph>
            <img 
            src={megan5} 
            alt="megan-wearing-mask-hugging-dog"
            style={{width:"400px", 
            height:"400px", 
            }}/>
        </AboutContainer>    
    )
}

const AboutContainer = styled.div`
    height: 500px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`

const Paragraph = styled.p`
    width: 30%;
`

export default About;