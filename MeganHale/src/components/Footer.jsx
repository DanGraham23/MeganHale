import styled from "styled-components";
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

const Footer = () => {
    return (
        <FooterContainer>
            <Header><AiOutlineCopyrightCircle aira-label="copyright symbol"/>2023, Megan Hale</Header>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    height: 150px;
    background-color: black;
    color: white ;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Header = styled.footer`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
export default Footer;