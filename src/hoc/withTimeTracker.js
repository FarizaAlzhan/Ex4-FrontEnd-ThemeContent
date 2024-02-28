import React, { Component } from 'react';

const withTimeTracking = (WrappedComponent) => {
  return class extends Component {
    state = {
      timeSpent: 0,
    };

    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({
          timeSpent: prevState.timeSpent + 1,
        }));
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    render() {
      return <WrappedComponent timeSpent={this.state.timeSpent} {...this.props} />;
    }
  };
};

export default withTimeTracking;
