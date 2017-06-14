import React, {Component} from 'react'
import styled from 'styled-components'
import '../static/css/icomoon.css'

const ControlCode = styled.div`
    position: fixed;
    bottom: 0.5em;  left: 0.5em;
    width: 100%;
    overflow-x: auto; 
`
const SpeedUp = styled.button`
    display: none;
`
const Stop = styled.button`
    display: none;
`
const KeepOn = styled.button`
    display: none;
`


export default class Control extends Component {
      constructor(props) {
          super(props)
          this.state = {
             
          }
          this.speedUp = this.speedUp.bind(this);
          this.stop = this.stop.bind(this);
          this.keepOn = this.keepOn.bind(this);
          this.skip = this.skip.bind(this);
          this.again = this.again.bind(this);
      }
      render() {
          return (
              <ControlCode className="clearfix">
                  {this.props.interval !== 0 && this.props.condition !== 'over' ? <SpeedUp className="btns speedUp" id="speedUp" onClick={this.speedUp} >
                    <span className="icon icon-speedUp"></span>加速
                  </SpeedUp> : null}
                 {   this.props.condition !== 'over' && this.props.condition !== 'stop' ?
                    <Stop className="btns" id="stop" onClick={this.stop}>
                    <span className="icon icon-stop"></span>停止
                    </Stop> : null}
                  { this.props.condition !== 'over' && this.props.condition === 'stop' ? 
                    <KeepOn className="btns" id="keepOn" onClick={this.keepOn}>
                    <span className="icon icon-jixv"></span>继续
                  </KeepOn> : null} 
                  { this.props.condition !== 'over' ?
                   <button className="btns" onClick={this.skip}>
                    <span className="icon icon-skip"></span>跳过
                  </button> : null }
                    <button className="btns" onClick={this.again}>
                        <span className="icon icon-skip"></span>重来
                    </button>
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
      again() {
          this.props.onAgain();
      }
      
}