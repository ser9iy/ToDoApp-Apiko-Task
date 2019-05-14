import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import Navigation from "./components/Navigation";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        done: false
      }
    };
  }
  inputElement = React.createRef();
  handleInput = e => {
    const currentItem = {
      text: e.target.value,
      key: Date.now(),
      done: false
    };
    //console.log(currentItem);
    this.setState(prevState => {
      return {
        ...prevState.items,
        currentItem
      };
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log("submit");
    if (this.inputElement.current.value !== "") {
      const items = this.state.items;
      items.push(this.state.currentItem);
      this.setState({ items: items });
      this.inputElement.current.value = "";
      this.inputElement.current.focus();
    }

    //console.log(this.state.items);
  };
  doTask = key => {
    // console.log(key)
    const filtered = this.state.items;
    filtered.forEach(it => {
      if (it.key === key) {
        it.done = it.done ? false : true;
      }
    });
    this.setState({ items: filtered });
  };
  deleteTask = key => {
    const filtered = this.state.items.filter(el => el.key !== key);
    this.setState({ items: filtered });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <h4 className="header">ToDoApp</h4>
          <Navigation />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <ToDoForm
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    inpElement={this.inputElement}
                  />
                  <ToDoList
                    items={this.state.items}
                    Delete={this.deleteTask}
                    Done={this.doTask}
                  />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/todo"
              render={() => (
                <ToDoList
                  items={this.state.items.filter(item => {
                    return item.done === false;
                  })}
                  Done={this.doTask}
                  Delete={this.deleteTask}
                />
              )}
            />
            <Route
              exact
              path="/done"
              render={() => (
                <ToDoList
                  items={this.state.items.filter(item => {
                    return item.done === true;
                  })}
                  Done={this.doTask}
                  Delete={this.deleteTask}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
