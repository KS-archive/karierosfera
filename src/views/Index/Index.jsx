import React, { Component } from 'react';
import { withRouter } from 'react-router';
import connect from 'react-redux/lib/connect/connect';
import NotificationSystem from 'react-notification-system';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { Container, Body } from './Index_styles';

class Index extends Component {
  componentDidMount() {
    this._notificationSystem = this.notificationSystem;
  }

  componentWillReceiveProps(nextProps) {
    this.innerBody.scrollTop = 0;
    const notification = nextProps.notifications[nextProps.notifications.length - 1];
    if (this.props.notifications !== nextProps.notifications) this.addNotification(notification);
  }

  addNotification = (notification) => {
    this._notificationSystem.addNotification({
      ...notification,
      position: 'tc',
      autoDismiss: 8,
    });
  };

  render() {
    return (
      <Container>
        <Nav />
        <Body innerRef={(innerBody) => { this.innerBody = innerBody; }}>
          {this.props.children}
          <Footer />
        </Body>
        <NotificationSystem ref={(c) => { this.notificationSystem = c; }} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications,
  };
}

export default withRouter(connect(mapStateToProps)(Index));
