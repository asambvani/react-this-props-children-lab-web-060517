// Code ThemedDecoration Component Here
import React from 'react'

class ThemedDecorations extends React.Component {

  render(){
    const childrenWithProps = React.Children.map(this.props.children, child=>{
      return(
        <div className={this.props.theme}>{child}</div>
      )
    })
    return (
      <div>
        {childrenWithProps}
      </div>
    )
  }
}

export default ThemedDecorations
