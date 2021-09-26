//used by stories and comments

import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ThemeContext from "./TopLevel/ThemeContext";
import LinkThemed from "./LinkThemed";




function StorySubtitle({by, time, id, descendants}) {
    const userLink = <LinkThemed to={`/user?id=${by}`}>
                    {by}
                    </LinkThemed>
    const on = new Date(time * 1000).toLocaleString()
    const commentLink = <LinkThemed to={`/post?id=${id}`}>
        {`${descendants}`}
    </LinkThemed>
    return (
        <p className={`heading__subtitle`}>
            by {userLink} on {on} with {commentLink} comments
        </p>
    )
}

export default function Story({story, large}) {
    console.log(story)
    let {title, by, time, id, descendants,url} = story
    let subtitleProps = {by, time, id, descendants}
    return (
        <ThemeContext.Consumer>{
            ({theme, toggleTheme}) => (
                <div className={`heading 
                ${large ? 'heading--large' : ''}
                ${theme === 'dark' ? 'heading--dark' : ''}
                `}>
                    <a href={url} className='heading__title'>
                        {title}
                    </a>
                    <StorySubtitle {...subtitleProps} theme={theme}/>
                </div>
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

