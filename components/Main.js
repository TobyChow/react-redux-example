import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/* Used to pass props from parent(props from store) and its own components  */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
