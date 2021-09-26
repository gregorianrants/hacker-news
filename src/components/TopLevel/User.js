import React from 'react'
import {getUser,getStories} from "../../utils/api";
import ThemeContext from "./ThemeContext";
import Stories from "../Stories";

export default class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
        }
    }

    async componentDidMount() {
        try {
            let user = await getUser(this.props.userID)
            console.log(user)
            this.setState({
                user: user
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        if(this.state.user!==null){
            let {created, karma} = this.state.user
            created = new Date(created * 1000).toLocaleString()
            return (
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <div>
                            <div className={`heading heading--large heading--user
                        ${theme==='dark' ? 'heading--dark' : ''}
                        `}>
                                <h2 className='heading__title'>
                                    {this.props.userID}
                                </h2>
                                <p className='heading__subtitle meta'>
                                    <>joined <strong>{created}</strong> has <strong>{karma}</strong> karma</>
                                </p>
                            </div>
                            <Stories updateStories={
                                ()=>{return getStories(this.state.user.submitted.slice(0,50))}} />
                        </div>


                    )}


                </ThemeContext.Consumer>

            )
        }
        return null

    }
}


