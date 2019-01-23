import React from 'react';
import PropTypes from 'prop-types'; //react16 将PropTypes模块从react中剔除，封装了一个单独的包'prop-types'做类型检查
class CountDown extends React.Component{
  constructor(){
    super(...arguments)
    this.state = {
      count: this.props.startCount
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    
    return nextState.count !== this.state.count
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }

  componentDidMount(){
    this.intervalHandle = setInterval(() => {
        const newCount = this.state.count - 1
        if(newCount > 0){
          this.setState({
            count: newCount
          })
        } else{
          window.clearInterval(this.intervalHandle)
          this.intervalHandle = null
        }
    }, 1000);
  }

  componentWillUnmount(){
    if(this.intervalHandle){
      window.clearInterval(this.intervalHandle)
      this.intervalHandle = null
    }
  }

  render(){
    return this.props.children(this.state.count)
  }
}

CountDown.propTypes = {
  children: PropTypes.func.isRequired,
  startCount: PropTypes.number.isRequired
}

export default CountDown