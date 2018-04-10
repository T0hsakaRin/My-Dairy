
import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*componentDidMount(){
    this.getData()
  }
  getData(){
    axios.get('/lls/api/todo').then((res)=>{
      console.log('response', res);
    })
  }  */
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList  items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button >
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    console.log('111',e);
    this.setState({ text: e.target.value });
    console.log('222',e.target.value);
  }

  handleSubmit(e) {

    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));

  }
}

class TodoList extends React.Component {

  render() {
    var arr = this.props.items
    var toUl = function(arr) {
        // console.log('arr', arr);
        var newArr = arr.map(item => (
          <li key={item.id}>{item.id}:{item.text}</li>
        ))
        // console.log('newArr', newArr);
        return newArr
    }
    return (
      <ul>
        {toUl(arr)}
      </ul>
    );
  }
}

// ReactDOM.render(<TodoApp />, mountNode);
export default TodoApp;
