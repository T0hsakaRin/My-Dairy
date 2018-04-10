
import React, { Component } from 'react'
import './style.css'
import p1 from './images/1.jpg'
import p2 from './images/2.jpg'
import p3 from './images/3.jpg'
import p4 from './images/4.jpg'
import next from './images/next.png'
import prev from './images/prev.png'




class Swiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [],
        // text: 'lls' ,
        curImg: 0,
        imgs: [p1, p2, p3, p4,next,prev],
    };
    this.timer = null
    this.nextClick = this.nextClick.bind(this)
    this.prevClick = this.prevClick.bind(this)
    this.loop()
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }

  nextClick(e){
      // add action for change img
      console.log('click', e)
      // this.state.text += "hello"
      this.setState({curImg: (this.state.curImg + 1) % 4});
  }
  prevClick(e){
      // add action for change img
      console.log('click', e)
      // this.setState({text: this.state.text + 'hello'});

      this.setState({curImg: (this.state.curImg + 3 ) % 4});
  }
  loop (){
      if(this.props.option && !this.props.option.auto){

          return
      }
      var time = 5000
      var timer = setInterval(()=>{
          this.setState({curImg: (this.state.curImg + 3 ) % 4});
      }, time )
      this.timer = timer
  }

  render() {
    return (
        <div className="main">
          <div className="img-slide ">
                <div>{this.state.text}</div>
                <div>{this.state.text}</div>
              <div>
              <img className='font' src={this.state.imgs[this.state.curImg]}></img>
              </div>
              <img src={next} onClick={this.nextClick} className="button-next vertical-center"/>
              <img src={prev} onClick={this.prevClick} className="button-prev vertical-center "/>
          </div>
        </div>



    );
  }
}


export default Swiper;
