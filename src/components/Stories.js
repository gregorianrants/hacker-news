import React from 'react'
import Story from './Story'
import PropTypes from 'prop-types'
import ThemeContext from "./TopLevel/ThemeContext";

export default class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
        }
    }

    async updateStories() {
        try {
            this.setState({
                stories: await this.props.updateStories()
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
            <div className='List'>
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

