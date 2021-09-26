import React from "react";
import {
    NavLink
} from "react-router-dom";
import styled from 'styled-components'
import ThemeContext from "./ThemeContext";

const NavBarStyled = styled.div`
  display: flex;
  padding: 2em 0;
`

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: calc(18rem / 16);
  font-weight: bold;
  padding: 0 0.5em 0 0;
  color: ${props=>props.theme==='light' ? 'black' : 'grey'};
`

const activeStyle = {
    color: 'var(--red)'
}


export default function NavBar() {
    return (
        <ThemeContext.Consumer>{
            ({theme, toggleTheme}) => (
                <div className='navbar'>
                    <NavLink exact to='/'
                                   activeStyle={activeStyle}
                                  className={`navlink ${theme==='dark' ? 'navlink--dark' : '' }`}
                    >Top</NavLink>
                    <NavLink to='/new'
                                   activeStyle={activeStyle}
                             className={`navlink ${theme==='dark' ? 'navlink--dark' : '' }`}
                    >New</NavLink>
                    <button
                        className='torch' onClick={toggleTheme}>
                        {theme==='light' ? '🔦' : '💡'}
                    </button>'
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
