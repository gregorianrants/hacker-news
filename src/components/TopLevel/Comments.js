import React from 'react'
import {getItem,getItems} from "../../utils/api";
import Story from '../Story'
import { withRouter } from "react-router";
import queryString from 'query-string'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Meta,LinkStyled} from "../Style/BaseStyles";

const CommentStyled = styled.div`
  background-color: #EDEDED;
  padding: 1em;
  margin-top: 1em;
  border-radius: 0.2em;
`

const CommentContent = styled.div`
  & p{
    margin-top: 1em;
  }
  margin-top: 1em;
`

/*const CommentSubtitle = styled(HeaderSubtitle)`
margin-bottom: 1em;
`*/

function Comment(props){
    let {by,time,text}= props.comment
    time = (new Date(time)).toLocaleString()

    function createMarkup(content){
        return {__html: content}
    }
    const userLink =  <LinkStyled to={`/user?id=${by}`}>{by}</LinkStyled>//TODO this
    // link is also used in Story consider reafactoring into a function to
    // be shared
    return(
        <CommentStyled>
            <Meta>by {userLink} on {time}</Meta>
            <CommentContent dangerouslySetInnerHTML={createMarkup(text)}></CommentContent>
        </CommentStyled>
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
