import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.todo);
    this.setState({
      todo: "",
    });
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              todo="todo"
              type="text"
              value={this.state.todo}
              onChange={this.handleInput}
            ></input>
          </label>
          <div>
            <button> Add to the list </button>
          </div>
        </form>
        <div className="remove">
          <button onClick={this.props.clearTodo}>Finished Todo</button>
        </div>
      </div>
    );
  }
}

export default TodoForm;
