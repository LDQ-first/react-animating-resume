import React, {Component} from 'react'
import styled from 'styled-components'

const ControlCode = styled.div`
    position: fixed;
    bottom: 0.5em;  left: 0.5em;
    width: 100%;
    overflow-x: auto; 
`


export default class Control extends Component {
     
      render() {
          return (
              <ControlCode className="clearfix">
                  <button onClick={this.stop.bind(this)}>停止</button>
                  <button onClick={this.skip.bind(this)}>跳过</button>
              </ControlCode>
          )
      }
      skip(e) {
          this.props.onSkip();
      }
      stop(e) {
          this.props.onStop();
      }
}