import styled from "styled-components";
import megan5 from '../assets/images/megan5.jpg'


const About = () => {
    return (
        <AboutContainer id="about">
            <Image 
            src={megan5} 
            alt="megan wearing a mask and hugging her dog"/>
            <BioContainer>
                <Header>Hello, I'm Megan.</Header>
                <Paragraph>
                I am a blind college student at SUNY Brockport. My degree is in Adapted Physical Education. 
                I developed my own program for blind females about women in sport issues based off of my own experiences. 
                I work as a one on one coach at Camp Abilities, teaching students how to participate in sports with a visual impairment. 
                I participated in my first Ironman triathlon in the summer of 2022 with my guide John Slyer. 
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
        font-size: 9px;
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