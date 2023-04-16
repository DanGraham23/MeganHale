import styled from "styled-components";
import EventCard from './EventCard.jsx';
import megan4 from '../assets/images/MeganImages/megan4.jpg';
import megan6 from '../assets/images/MeganImages/megan6.jpg';
import megan7 from '../assets/images/MeganImages/megan7.jpg';

const EventResults = () => {
    return (
        <EventResultsContainer tsContainer id="event-results">
            <EventCard 
            img={megan4}
            imageDescription={"DESCRIBE THE IMAGE HERE FOR ALT TAGS"}
            title={"Ironman"}
            location={"New York, NY"}
            description={"This was a great event! I got to meet so many new people!! I am looking forward to coming back next year."}/>
            <EventCard 
            img={megan6}
            imageDescription={"DESCRIBE THE IMAGE HERE FOR ALT TAGS"}
            title={"Ironman"}
            location={"New York, NY"}
            description={"This was a great event! I got to meet so many new people!! I am looking forward to coming back next year."}/>
            <EventCard 
            img={megan7}
            imageDescription={"DESCRIBE THE IMAGE HERE FOR ALT TAGS"}
            title={"Ironman"}
            location={"New York, NY"}
            description={"This was a great event! I got to meet so many new people!! I am looking forward to coming back next year."}/>
        </EventResultsContainer>
    )
}

const EventResultsContainer = styled.div`
    height: 600px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
`

export default EventResults;