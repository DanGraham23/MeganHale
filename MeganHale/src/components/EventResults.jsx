import styled from "styled-components";
import EventCard from './EventCard.jsx';
import megan4 from '../assets/images/megan4.jpg';
import megan6 from '../assets/images/megan6.jpg';
import megan7 from '../assets/images/megan7.jpg';

const EventResults = () => {
    return (
        <EventResultsContainer tsContainer id="event-results">
            <EventCard 
            img={megan4}
            imageDescription={"DESCRIBE THE IMAGE HERE FOR ALT TAGS"}
            title={"Triathalon"}
            location={"Stoney Pointe New York"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis faucibus turpis vitae eleifend. Maecenas hendrerit urna nunc."}/>
            <EventCard 
            img={megan6}
            imageDescription={"DESCRIBE THE IMAGE HERE FOR ALT TAGS"}
            title={"Ironman"}
            location={"Lake Placid"}
            description={"Proin id tortor felis. Nunc in facilisis ligula."}/>
            <EventCard 
            img={megan7}
            imageDescription={"DESCRIBE THE IMAGE HERE FOR ALT TAGS"}
            title={"Marathon"}
            location={"Houston"}
            description={"Morbi nec ipsum ut erat porttitor fringilla. Fusce laoreet egestas sollicitudin. Curabitur ac lacinia mi, in consectetur dui."}/>
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
    gap: 69px;
    @media screen and (max-width:1024px) {
        gap: 50px;
    }
    @media screen and (max-width:768px) {
        flex-direction: column;
        height: 1200px;
        gap: 30px;
    }
    @media screen and (max-width:480px) {
        gap: 10px;
    }
`

export default EventResults;