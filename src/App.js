import React from "react";
import TodoForm from "./components/TodoForm";

const toDoListData = [
  {
    todo: "learn javascript",
    id: 1593442,
    completed: false,
  },
  {
    todo: "learn node",
    id: 1593441,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDoListData,
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addToDo = (todo) => {
    const newToDo = {
      todo: todo,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      toDoList: [...this.state.toDoList, newToDo],
    });
  };

  clearTodo = () => {
    this.setState({
      toDoList: this.state.toDoList.filter((i) => {
        if (i.done === false) return i;
      }),
    });
  };

  finishedToDo = (id) => {
    this.setState({
      toDoList: this.state.toDoList.map((i) => {
        if (id === i.id) return { ...i, done: !i.done };
        else return i;
      }),
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          todo={this.state.todo}
          addToDo={this.addToDo}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
