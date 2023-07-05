import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers'
import React from 'react'

class App2 extends React.Component {
    constructor () {
        super()
        console.log('Component constructor')
        this.state = {
            name: 'Some name',
            age: 12,
            gender: 'male'
        }
        this.updateButton = this.updateButton.bind(this)
    }

    componentDidMount () {
        console.log('Component did mount')
    }

    componentDidUpdate() {
        console.log('Component did update')
    }

    // componentWillUnmount() {
    //     console.log('Component will unmount')
    //     clearInterval(interval1)
    //     clearInterval(interval2)
    //     clearInterval(interval3)
    // }

    updateButton () {
        this.setState({
            name: 'My new name'
        })
    }

    render () {
        console.log('Component did render')
        return (
            <div>
            <button onClick={this.updateButton}>
                Click me
            </button>
            {this.state.name}
            </div>
        )
    }
}

export default App2;