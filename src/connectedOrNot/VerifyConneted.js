import React, { Component } from 'react';
import { Navigate } from 'react-router-dom'

class VerifyConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: navigator.onLine,
      location: null,
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.handleOnlineStatus);
    window.addEventListener('offline', this.handleOnlineStatus);

    if (this.state.isOnline) {
      this.getLocation();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnlineStatus);
    window.removeEventListener('offline', this.handleOnlineStatus);
  }

  handleOnlineStatus = () => {
    this.setState({ isOnline: navigator.onLine }, () => {
      if (this.state.isOnline) {
        this.getLocation();
      }
    });
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      (error) => {
        console.error('Error fetching location:', error);
      }
    );
  };

  render() {
    if (!this.state.isOnline) {
      return <Navigate to="/404" />;
    }

    return (
      <>
      </>
    );
  }
}
export default VerifyConnected;



