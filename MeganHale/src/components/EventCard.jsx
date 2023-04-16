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
    height: 75%;
`

const Title = styled.h1`
    height: 10%;
`

const Location = styled.h2`
    height: 10%;
`

const Description = styled.p`
    height: 30%;
`

const Image = styled.img`
    height: 50%;
    width: 100%;
`

export default EventCard;