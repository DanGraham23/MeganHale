import styled from 'styled-components';
import megan2 from '../assets/images/megan2.jpg'
import {BsFillPlayBtnFill} from 'react-icons/bs';

const Home = () => {

    return (
        <HomeContainer id="home">
            <StyledIcon>
                <Anchor href="https://www.youtube.com/watch?v=Vqctslb6d40"
                target="_blank"
                rel="noopener noreferrer"><BsFillPlayBtnFill aria-label='play-button-to-megan-hale-interview'></BsFillPlayBtnFill></Anchor>
            </StyledIcon>
            <Image src={megan2} alt="Gray scale version of Megan doing an interview for HVCC"></Image>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  height: 800px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px){
    height: 600px;
  }
  @media screen and (max-width: 768px){
    height: 450px;
  }
`

const Image = styled.img`
    width:100%;
    height:100%;
    filter: grayscale(95%) brightness(55%) contrast(100%);
`

const StyledIcon = styled.div`
    font-size: 100px;
    position: absolute;
    z-index: 5;
    color: white;
    &:hover{
        color: black;
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        font-size: 70px;
    }
`

const Anchor = styled.a`
    text-decoration: none;
    color: inherit;
`

export default Home;