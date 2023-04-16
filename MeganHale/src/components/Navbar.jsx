import styled from 'styled-components';
import {GiSprint} from 'react-icons/gi';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <Nav>
            <Header>
                <GiSprint aria-label="sprinting-logo"/>
                Megan Hale
            </Header>
            <List>
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
`


const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 15px;
  margin-left: auto;
  margin-right: 100px;
  font-weight: 400;
  font-size: 24px;

`


const ListItem = styled.li`
    border-radius: 24px;
    min-width: 75px;
    max-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
   &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    
  }
`

export default Navbar;