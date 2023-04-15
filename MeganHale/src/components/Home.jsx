import styled from 'styled-components';
import megan2 from '../assets/images/MeganImages/megan2.jpg'

const Home = () => {

    return (
        <HomeContainer id="home">

        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  height: 800px;
  background-image: url(${megan2});
  filter: grayscale(90%) brightness(60%) contrast(100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: white;
`

export default Home;