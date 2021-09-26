import React from 'react'
import ThemeContext from "./TopLevel/ThemeContext";

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.interval = null
        this.state = {
            loading: 'Loading'
        }
    }

    updateLoading = ({loading}) => {
        if (loading === 'Loading...') return {loading: 'Loading'}
        return {loading: loading + '.'}
    }

    componentDidMount() {
        this.interval = window.setInterval(
            () => {
                this.setState(this.updateLoading)
            }
            , 200)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    render() {

        return (
            <ThemeContext.Consumer>
                {({theme}) => (
                    <p className={`loading ${theme==='dark' ? 'loading--dark' : ''}`}>
                        {this.state.loading}</p>
                )}
            </ThemeContext.Consumer>
        )


    }
}
