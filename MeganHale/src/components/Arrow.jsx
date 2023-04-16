import styled from "styled-components";
import {AiOutlineArrowUp} from 'react-icons/ai';
import {Link} from 'react-scroll'

const Arrow = () => {
    return (
        <Link
            to="home"
            smooth={true}>
            <StyledIcon>
                <AiOutlineArrowUp aria-label="arrow-back-to-top-of-page"/>  
            </StyledIcon>
        </Link>
    )
}

const StyledIcon = styled.div`
    font-size: 52px;
    color: black;
    background-color: white;
    border: 2px solid black;
    display: flex;
    border-radius: 100%;
    padding: 10px;
    position: fixed;
    bottom: 150px;
    right: 75px;
    cursor: pointer;
    opacity: 40%;
    z-index: 10;
`

export default Arrow;