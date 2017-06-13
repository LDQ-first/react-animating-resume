import React, {Component} from 'react'
import styled from 'styled-components'

const ControlCode = styled.div`
    position: fixed;
    bottom: 0.5em;  left: 0.5em;
    width: 100%;
    overflow-x: auto; 
`


export default class Control extends Component {
      constructor(props) {
          super(props)
          this.stop = this.stop.bind(this);
          this.skip = this.skip.bind(this);
      }
      render() {
          return (
              <ControlCode className="clearfix">
                  <button onClick={this.stop}>停止</button>
                  <button onClick={this.skip}>跳过</button>
              </ControlCode>
          )
      }
      stop(e) {
          this.props.onStop();
      }
      skip(e) {
          this.props.onSkip();
      }
      
}