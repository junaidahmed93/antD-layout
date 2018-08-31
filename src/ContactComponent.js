import React from 'react';
import { Link } from 'react-router-dom';
class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Contact Component UAN : 121212
                <ul>
          <li><Link to="/contactDetails/1">User 1</Link></li>
          <li><Link to="/contactDetails/2">User 2</Link></li>
        </ul>
      </div>
    );
  }
}

export default AboutContainer;
