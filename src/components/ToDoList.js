import React from "react";

class ToDoList extends React.Component {
  render() {
    if (this.props.items.length === 0) {
      return <h4>No Tasks..</h4>;
    }
    return (
      <ul>
        {this.props.items.map(el => {
          return (
            <li
              className="collection-item"
              key={el.key}
              className={
                el.done
                  ? "card-panel hoverable teal lighten-3 done"
                  : "card-panel hoverable red lighten-3"
              }
            >
              <span>
                {el.text}

                <i
                  className="material-icons small right"
                  onClick={() => this.props.Delete(el.key)}
                >
                  delete
                </i>
                <i
                  className="material-icons small right"
                  onClick={() => {
                    this.props.Done(el.key);
                  }}
                >
                  {el.done ? "undo" : "done"}
                </i>
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ToDoList;
