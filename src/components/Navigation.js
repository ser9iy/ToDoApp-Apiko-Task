import React from "react";
import { Link } from "react-router-dom";
class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Link to="/" className="indigo lighten-1 btn-small">
          All
        </Link>

        <Link to="/todo" className="red lighten-2 btn-small">
          ToDo
        </Link>
        <Link to="/done" className="waves-effect waves-light btn-small">
          Done
        </Link>
      </div>
    );
  }
}

export default Navigation;
