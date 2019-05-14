import React from "react";

class ToDoForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            placeholder="Enter you task"
            onChange={this.props.handleInput}
            ref={this.props.inpElement}
          />
          <button type="submit" className="btn waves-effect waves-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
