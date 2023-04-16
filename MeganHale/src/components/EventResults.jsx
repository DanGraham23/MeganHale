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
            location={"Albany, NY"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis faucibus turpis vitae eleifend. Maecenas hendrerit urna nunc."}/>
            <EventCard 
            img={megan6}
            imageDescription={"DESCRIBE THE IMAGE HERE FOR ALT TAGS"}
            title={"Triathalon"}
            location={"Loudonville, NY"}
            description={"Proin id tortor felis. Nunc in facilisis ligula."}/>
            <EventCard 
            img={megan7}
            imageDescription={"DESCRIBE THE IMAGE HERE FOR ALT TAGS"}
            title={"Marathon"}
            location={"New York, NY"}
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
    gap: 80px;
`

export default EventResults;