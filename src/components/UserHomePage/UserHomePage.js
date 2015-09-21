
import React, { PropTypes } from 'react';
import styles from './UserHomePage.less';
import withStyles from '../../decorators/withStyles';
import withAuthentication from '../../decorators/withAuthentication';

@withAuthentication
@withStyles(styles)

class UserHomePage extends React.Component {
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired
  };
  render() {
    let title = this.props.user.name;
    this.context.onSetTitle(title);
    return (
      <div className="userhome">
        <span>User name: {this.props.user.name}</span>
        <br/>
        <span>user id: {this.props.user.userid}</span>
      </div>
    );
  }
}

export default UserHomePage;
