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
          this.speedUp = this.speedUp.bind(this);
          this.stop = this.stop.bind(this);
          this.keepOn = this.keepOn.bind(this);
          this.skip = this.skip.bind(this);
          /*this.again = this.again.bind(this);*/
      }
      render() {
          return (
              <ControlCode className="clearfix">
                  <button className="btns" onClick={this.speedUp}>加速</button>
                  <button className="btns" onClick={this.stop}>停止</button>
                  <button className="btns" onClick={this.keepOn}>继续</button>
                  <button className="btns" onClick={this.skip}>跳过</button>
                { /* <button className="btns" onClick={this.again}>重来</button>*/}
              </ControlCode>
          )
      }
      speedUp() {
          this.props.onSpeedUp();
      }
      stop() {
          this.props.onStop();
      }
      keepOn() {
          this.props.onKeepOn();
      }
      skip() {
          this.props.onSkip();
      }
      /*again() {
          this.props.onAgain();
      }*/
      
}