//used by stories and comments

import React from "react";
import PropTypes from "prop-types";
import {HeaderStyled,HeaderTitle,HeaderSubtitle,LinkStyled} from './Style/Header'
import styled from 'styled-components'
import ThemeContext from "./TopLevel/ThemeContext";


function StorySubtitle({by,time,id,descendants,theme}){
    const userLink =  <LinkStyled
        to={`/user?id=${by}`}
        theme={theme}
    >{by}
    </LinkStyled>
    const on = new Date(time * 1000).toLocaleString()
    const commentLink = <LinkStyled
        to={`/post?id=${id}`}
        theme={theme}
    >
        {`${descendants}`}
    </LinkStyled>
    return(
        <>by {userLink} on {on} with {commentLink} comments</>
    )
}

export default function Story({story, large, contextClass}) {
    console.log(story)
    let {title, by, time, id, descendants} = story
    let numberOfComments
        = story.hasOwnProperty('kids') ? story.kids.length : 0;
    return (

    <ThemeContext.Consumer>{
        ({theme, toggleTheme}) => (
            <HeaderStyled>
                <HeaderTitle large={large}
                             color={theme==='light' ?'red' : 'grey'}>
                    {title}
                </HeaderTitle>
                <HeaderSubtitle>
                    {StorySubtitle(
                        {by, time, id, descendants,theme})}
                </HeaderSubtitle>
            </HeaderStyled>
        )}
    </ThemeContext.Consumer>

)
}

Story.defaultProps = {
    large: false,
    contextClass: null
}

Story.propTypes = {
    story: PropTypes.shape({
        title: PropTypes.string.isRequired,
        by: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    }),
    large: PropTypes.bool.isRequired
}

