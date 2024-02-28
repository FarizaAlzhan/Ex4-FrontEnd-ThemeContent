import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Tooltip extends Component {
  state = {
    isVisible: false,
    position: { top: 0, left: 0 },
  };

  handleMouseEnter = (e) => {
    const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = e.target;
    const { position } = this.props;

    const tooltipPosition = {
      top: position === 'top' ? offsetTop - 55   : position === 'bottom' ? offsetTop + offsetHeight + 10 : offsetTop + offsetHeight / 2 - 10,
      left: position === 'left' ? offsetLeft - 50 : position === 'right' ? offsetLeft + offsetWidth + 40 : offsetLeft + offsetWidth / 2 - 10,
    };

    this.setState({
      isVisible: true,
      position: tooltipPosition,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    const { isVisible, position } = this.state;
    const { content } = this.props;

    return (
      <div className="tooltip-container" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.props.children}
        {isVisible && (
          <div className="tooltip-content" style={{ top: position.top, left: position.left }}>
            {content}
          </div>
        )}
      </div>
    );
  }
}

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

Tooltip.defaultProps = {
  position: 'top',
};

export default Tooltip;
