import React, { Component } from 'react';


class NotFoundPage extends Component {
    render() {
      return (
        <div className="container mt-5">
          <h1>404 - Not Found</h1>
          <p>It seems like you are offline. Please check your internet connection.</p>
        </div>
      );
    }
  }
  export default NotFoundPage;