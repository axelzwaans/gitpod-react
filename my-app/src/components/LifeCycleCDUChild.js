import React, { Component } from 'react'

export class LifeCycleCDUChild extends Component {
    constructor(props) {
        console.log(' Child Constructor called!')
        super(props)

        this.state = {
            greeting: "Child Hello!"
        }
    }

    updateGreeting = () => {
        this.setState(prevState => {
            console.log('Child Update greeting called!')
            return {
                greeting: prevState.greeting === 'Child Hello!' ? 'Child Goodbye!' : 'Child Hello!'
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Child Component updated!')
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        if (prevProps.parentGreeting !== this.props.parentGreeting) {
            console.log('Parent greeting has changed!')
        }
    }

    render() {
        console.log('Child Render method called!')
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
            </div>
        )
    }
}

export default LifeCycleCDUChild