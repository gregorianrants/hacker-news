import React from 'react'
import {getUser} from "../../utils/api";
import {HeaderStyled, HeaderSubtitle, HeaderTitle} from '../Style/Header'

export default class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }

    async componentDidMount() {
        try {
            let user = await getUser(this.props.userID)
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
                <HeaderStyled>
                    <HeaderTitle large={true} color={'black'}>
                        {this.props.userID}
                    </HeaderTitle>
                    <HeaderSubtitle>
                        <>joined {created} has {karma} karma</>
                    </HeaderSubtitle>
                </HeaderStyled>
            )
        }
        return null

    }
}


