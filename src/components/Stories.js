import React from 'react'
import Story from './Story'
import PropTypes from 'prop-types'
import ThemeContext from "./TopLevel/ThemeContext";
import Loading from "./Loading"


export default class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            loading: true
        }
    }

    async updateStories() {
        try {
            const stories = await this.props.updateStories()
            this.setState({
                stories,
                loading: false
            })
        } catch (err) {
            console.log(err)
        }
    }

    async componentDidMount() {
        await this.updateStories()
    }

    /*async componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            await this.updateStories()
        }
    }*/

    render() {
        return (
            this.state.loading ? <Loading/>:
            <div className='stories'>
                {this.state.stories.map(
                    (story) => {
                        return (<Story
                            story={story}
                            contextClass={'List'}
                            key={story.id}
                        />)
                    }
                )}
            </div>
        )
    }
}

Stories.propTypes = {
    updateStories: PropTypes.func.isRequired,

}

