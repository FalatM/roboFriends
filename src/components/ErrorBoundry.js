import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }

    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1 className="tc">Hmmmm Not sure what happend. We will look into it.</h1>
        }

        return this.props.children;
    }

}

export default ErrorBoundry;