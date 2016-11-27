import React, {
  Component,
  PropTypes,
} from 'react';
import {Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <h2>This is App.js!</h2>
        <Link to={'/'}>Home</Link>
        {' '}
        <Link to={'about'}>About</Link>
        {' '}
        <Link to={'contact'}>Contact</Link>
        <div>
          {this.props.children || <h3>No child, looking at home</h3>}
        </div>
      </div>
    );
  }
}

// App.propTypes = {};

// App.defaultProps = {};

module.exports = App;
