import ThemeContext from "./TopLevel/ThemeContext";
import {Link} from "react-router-dom";
import React from "react";

export default function LinkThemed({to, children}) {
    return (
        <ThemeContext.Consumer>{
            ({theme, toggleTheme}) => (
                <Link to={to} className={`link
                           ${theme === 'dark' ? 'link--dark' : 'link'}
                           `}>
                    {children}
                </Link>
            )}
        </ThemeContext.Consumer>
    )
}
