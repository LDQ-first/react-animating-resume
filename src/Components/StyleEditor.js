import React, {Component} from 'react'
import ReactDOM from "react-dom"
import Prism from "prismjs"
import {PrismCode} from "react-prism"
import styled from 'styled-components'
import classnames from 'classnames'

const StyleEditors = styled.div`
    &.showCode {
        transition: all 0.5s ease-in-out;
        transform: translate(-50%, 0);
        opacity: 1;
    }
`

class StyleEditor extends Component {
      constructor (props) {
          super(props)
          this.state = {
              isShowCode: false
          }
      }
      controlCode() {
         const isShowCode = this.state.isShowCode ? false : true;
         this.setState({isShowCode: isShowCode})
      }
      componentDidUpdate() {
         const len = this.props.code.length;
         const lastChar = this.props.code.substring(len - 2, len -1);
         if(lastChar === '\n') {
              ReactDOM.findDOMNode(this).scrollTop = 10000;
         }
      }
      render() {
          return (
              <StyleEditors className={classnames('styleEditor ',{ showCode: this.state.isShowCode})} 
              ref={ styleEditors => this._styleEditors = styleEditors }>
                  <style>{this.props.code}</style>
                  <pre><PrismCode className="language-css">{this.props.code}</PrismCode></pre>
              </StyleEditors>
          )
      }
}

export default StyleEditor