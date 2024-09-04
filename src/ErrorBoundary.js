import { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        isError: false
    }
    static getDerivedStateFromError(error){
        return {
            isError: true
        }
    }
    render(){
        if(this.state.isError){
            return (
                <div>Samting WOng</div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary