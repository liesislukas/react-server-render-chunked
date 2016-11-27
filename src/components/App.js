import React, {
  Component,
  PropTypes,
} from 'react';
import {Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hi from index!</h2>
        <Link to={'about'}>About</Link>  |
        <Link to={'contact'}>Contact</Link>
        <div>
          {this.props.children || 'no child'}
        </div>
      </div>
    );
  }
}

// App.propTypes = {};

// App.defaultProps = {};

module.exports = App;
