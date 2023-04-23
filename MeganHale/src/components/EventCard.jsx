import styled from "styled-components";


const EventCard = (props) => {
    return (
        <EventCardContainer>
            <Image 
            src={props.img} 
            alt={props.imageDescription}/>
            <Title> {props.title}</Title>
            <Location>{props.location}</Location>
            <Description>{props.description}</Description>
        </EventCardContainer>
    )
}

const EventCardContainer = styled.div`
    width: 20%;
    height: 80%;
    @media screen and (max-width:768px) {
        height: 30%;
        width: 50%;
    }
`

const Title = styled.h1`
    height: 10%;
    @media screen and (max-width: 1024px){
        font-size: 24px;
    }
    @media screen and (max-width:768px) {
        font-size: 20px;
    }
`

const Location = styled.h2`
    height: 10%;
    @media screen and (max-width:1024px) {
        font-size: 22px;
    }
    @media screen and (max-width:768px) {
        font-size: 18px;
    }
    @media screen and (max-width:480px) {
        font-size: 16px;
    }
`

const Description = styled.p`
    height: 30%;
    @media screen and (max-width:1024px) {
        font-size: 16px;
    }
    @media screen and (max-width:900px) {
        font-size: 15px;
    }
    @media screen and (max-width:768px) {
        font-size: 13px;
    }
    @media screen and (max-width:480px) {
        font-size: 11px;
    }
`

const Image = styled.img`
    height: 50%;
    width: 100%;
    @media screen and (max-width:1024px) {
        height: 40%;
    }
    @media screen and (max-width:900px) {
        height: 40%;
    }
    @media screen and (max-width:768px) {
        height: 60%;
    }
    @media screen and (max-width:480px) {

    }
`

export default EventCard;