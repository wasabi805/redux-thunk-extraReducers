import React, { Component } from 'react'

interface IProps{
    render?: ()=> void
}

class ButtonWrapper extends Component<IProps> {
  state = { count: 0 }

  incrementCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1
    })
  }

  render() {
    return <button>1</button>
  }
}

export default ButtonWrapper
