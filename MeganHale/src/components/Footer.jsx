import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <div>WEL GROUP INC.</div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    height: 150px;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Footer;