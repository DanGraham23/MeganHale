import styled from "styled-components";
import megan4 from '../assets/images/MeganImages/megan4.jpg'

const EventCard = () => {
    return (
        <EventCardContainer>
            <Image src={megan4}></Image>
            <Title> Triathalon</Title>
            <Location>New York, NY</Location>
            <Description>this was a great event! I got to meet so many new people!!</Description>
            
        </EventCardContainer>
    )
}

const EventCardContainer = styled.div`
    width: 25%;
`

const Title = styled.h1`
    
`

const Location = styled.h2`
    
`

const Description = styled.p`
    
`

const Image = styled.img`
    height: 40%;
    width: 90%;
`

export default EventCard;