import styled from "styled-components";
import EventCard from './EventCard.jsx';

const EventResults = () => {
    return (
        <EventResultsContainer tsContainer id="event-results">
            <EventCard />
            <EventCard />
            <EventCard />
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
    gap: 50px;
`

export default EventResults;