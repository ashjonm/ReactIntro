import React from "react"

class Hello extends React.Component {
    render() {
        return <div>Hello, {this.props.name}, from hello.js</div>
    }
}

export default Hello;