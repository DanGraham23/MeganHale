import styled from "styled-components";
import megan6 from '../assets/images/megan6.jpeg'

const EventResults = () => {



    return (
        <EventResultsContainer id="event-results">
            <Header>My Events</Header>
            <EventResult>
                <MainEventContainer>
                    <Image src={megan6} alt="megan holding water standing next to John after Ironman Lake Placid" />
                    <MainEvent>
                        <MainEventHeader>Ironman - Lake Placid</MainEventHeader>
                        <MainEventBody>I participated in my first Ironman triathlon in the summer of 2022 with my guide John Slyer. 
                            I am believed to be the first blind athlete to have completed Ironman Lake Placid. </MainEventBody>
                    </MainEvent>
                </MainEventContainer>
                <EventContainer>
                        <Event>Tupper Lake - Half Ironman</Event>
                        <Event>Houston - Marathon</Event>
                        <Event>Rochester, Flower City - Marathon</Event>
                        <Event>Stoney Pointe New York - Olympic</Event>
                        <Event>Keuka Lake - Olympic</Event>
                </EventContainer>
            </EventResult>
        </EventResultsContainer>
    )
}

const EventResultsContainer = styled.div`
    height: 650px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`


const Header = styled.h1`
    margin-bottom: 30px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
`
const Image = styled.img`
    width: 100%;
    height: 350px;
    @media screen and (max-width: 1200px){
        height: 275px;
    }
    @media screen and (max-width: 1024px){
        height: 250px;
    }
`

const EventResult = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 50px;
    }
`

const MainEventContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 30%;
    gap: 10px;
    @media screen and (max-width: 768px){
        width: 50%;
    }
    @media screen and (max-width: 480px){
        width: 70%;
    }
`

const MainEvent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const MainEventHeader = styled.h1`
    @media screen and (max-width: 1200px){
        font-size: 26px;
    }
    @media screen and (max-width: 1024px){
        font-size: 22px;
    }
`

const MainEventBody = styled.p`
    @media screen and (max-width: 1200px){
        font-size: 15px;
    }
    @media screen and (max-width: 1200px){
        font-size: 13px;
    }
    @media screen and (max-width: 768px){
        font-size:12px;
    }
`

const EventContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 20px;
    @media screen and (max-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        width: 90%;
    }
`

const Event = styled.h1`
    text-decoration: underline;
    text-underline-offset: 2px;
    @media screen and (max-width: 1200px){
        font-size: 26px;
    }
    @media screen and (max-width: 1024px){
        font-size: 20px;
    }
    @media screen and (max-width: 768px){
        font-size: 17px;
    }
    @media screen and (max-width: 480px){
        font-size: 13px;
    }
`


export default EventResults;