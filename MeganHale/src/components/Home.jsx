import styled from 'styled-components';

const Home = () => {

    return (
        <HomeContainer id="home">
            <Video
            src="https://www.youtube.com/embed/Vqctslb6d40"
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  height: 800px;
`

const Video = styled.iframe`
    width:100%;
    height: 100%;
    filter: grayscale(90%) brightness(80%) contrast(100%);
`

export default Home;