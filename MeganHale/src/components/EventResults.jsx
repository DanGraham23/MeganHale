import styled from "styled-components";

const EventResults = () => {
    return (
        <EventResultsContainer id="event-results">
            <div>RESULT 1</div>
            <div>RESULT 2</div>
            <div>RESULT 3</div>
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
`

export default EventResults;