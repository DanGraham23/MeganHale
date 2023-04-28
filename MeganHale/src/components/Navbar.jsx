import styled from 'styled-components';
import {GiSprint, GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-scroll';
import {useState} from 'react';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    function toggleNavMenu(){
        setToggleMenu(!toggleMenu);
    }

    return (
        <Nav>
            <Header>
                <GiSprint aria-label="sprinting person logo"/>
                Megan Hale
            </Header>
            <MobileNavTriangle display={toggleMenu}/>
            {!toggleMenu && <StyledIcon>
                <GiHamburgerMenu aria-label='open mobile navigation menu' onClick={toggleNavMenu}/>
                </StyledIcon>}
            {toggleMenu && <StyledIcon>
                <AiOutlineClose aria-label='close mobile navigation menu' onClick={toggleNavMenu}/>
                </StyledIcon>}
            <List display={toggleMenu}>
                <Link activeClass="active"
                to="home"
                spy={true}
                smooth={true}>
                    <ListItem>
                    Home
                    </ListItem>
                </Link>
                <Link activeClass="active"
                to="about"
                spy={true}
                smooth={true}>
                    <ListItem>
                    About
                    </ListItem>
                </Link>
                <Link activeClass="active"
                to="event-results"
                spy={true}
                smooth={true}>
                    <ListItem>
                    Event Results
                    </ListItem>
                </Link>
                <Link activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                >
                    <ListItem>
                    Contact
                    </ListItem>
                </Link> 
            </List>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 150px;
    z-index: 10;
    color: white;
`

const Header = styled.h1`
    font-weight: 700;
    margin-left: 100px;
    font-size: 32px;
    cursor: default;
    @media screen and (max-width: 1023px){
        margin-left: 50px;
    }
    @media screen and (max-width: 768px){
        font-size: 26px;
    }
`


const List = styled.ul`
    @media screen and (max-width: 1023px){
        flex-direction: column;
        list-style: none;
        background-color: black;
        position: absolute;
        right: 50px;
        top: 120px;
        padding: 35px 50px;
        display: ${ props => !props.display ? 'none' : 'inline' };
        gap: 25px;
    }
    @media screen and (min-width: 1024px){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        list-style: none;
        gap: 15px;
        margin-left: auto;
        margin-right: 100px;
        font-weight: 400;
        font-size: 24px;
    }
`


const ListItem = styled.li`
    border-radius: 24px;
    min-width: 75px;
    max-width: 200px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
   &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    }
`

const StyledIcon = styled.div`
    display: none;
    @media screen and (max-width: 1023px) {
        display: inline;
        margin-left: auto;
        cursor: pointer;
        margin-right: 50px;
        font-size: 28px;
    }
`

const MobileNavTriangle = styled.div`
    @media screen  and (max-width: 1023px) {
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: 40px solid black;
        border-left: 40px solid transparent;
        right: 50px;
        top: 90px;
        display: ${ props => !props.display ? 'none' : 'inline' };
    }
`

export default Navbar;