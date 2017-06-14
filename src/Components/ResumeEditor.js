import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import marked from "marked"
import styled from 'styled-components'
import classnames from 'classnames'

const PureResume = styled.div`
    &.pureResume {
        left: 0;
        top: 0;
        transform: translateX(0);
        width: 100%;
        height: auto;
        overflow: hidden;
    }
`

class ResumeEditor extends Component {
    constructor (props) {
          super(props)
          this.state = {
              isPureResume: false
          }
      }
      resume() {
          return {
              __html: this.props.enableHtml ? marked(this.props.content) : this.props.content
          }
      }
      pureResume() {
          this.setState({isPureResume: true});
      }
      componentDidUpdate() {
         const len = this.resume().__html.length;
         const lastChar = this.resume().__html.substring(len-2, len-1);
         if(lastChar === '\n') {
             ReactDOM.findDOMNode(this).scrollTop = 10000;
         }
      }
      render() {
          return (
              <PureResume className={classnames('resumeEditor', {pureResume:this.state.isPureResume})} ref={resumeEditor => this._resumeEditor = resumeEditor}>
                  <pre dangerouslySetInnerHTML= {this.resume()}></pre>
              </PureResume>
          )
      }
}

export default ResumeEditor