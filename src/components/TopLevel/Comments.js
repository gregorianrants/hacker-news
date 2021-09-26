import React from 'react'
import {getItem,getItems} from "../../utils/api";
import Story from '../Story'
import { withRouter } from "react-router";
import queryString from 'query-string'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Meta,LinkStyled} from "../Style/BaseStyles";
import LinkThemed from "../LinkThemed";
import ThemeContext from "./ThemeContext";


function Comment(props){
    let {by,time,text}= props.comment
    time = (new Date(time)).toLocaleString()

    function createMarkup(content){
        return {__html: content}
    }
    const userLink =  <LinkThemed to={`/user?id=${by}`}>{by}</LinkThemed>//TODO this
    // link is also used in Story consider reafactoring into a function to
    // be shared
    return(
    <ThemeContext.Consumer>{
        ({theme}) => (
            <div className={`comment
            ${theme==='dark' ? 'comment--dark' : ''}
            `}>
                <div className='meta'>by {userLink} on {time}</div>
                <p className='comment__content' dangerouslySetInnerHTML={createMarkup(
                    text)}></p>
            </div>
        )}
    </ThemeContext.Consumer>
    )
}

class Comments extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            story: null,
            comments: []
        }
    }

    async componentDidMount() {
        const {location} = this.props
        let {id} = queryString.parse(location.search)
        let story = await getItem(id)
        let comments = await getItems(story.kids)
        this.setState({
            story,
            comments
        })

        console.log(this.state)
    }

    render() {
        if (this.state.story!==null) {
            return (
                <React.Fragment>
                    <Story
                        story={this.state.story}
                        large={true}
                        black={true}
                    />
                    {
                        this.state.comments.map(comment => {
                            return <Comment comment={comment} key={comment.id}/>

                        })
                    }
                </React.Fragment>
            )
        }

        return null



    }
}

Comments.propTypes = {
    location: PropTypes.object.isRequired
}

export default withRouter(Comments)
