import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import getPortalContainer from './utils/getPortalContainer';
import ModalPortal from './ModalPortal';

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    position: PropTypes.string,
    modalClass: PropTypes.string,
    modalDialogClass: PropTypes.string,
    transition: PropTypes.bool,
    transitionEnterTimeout: PropTypes.number,
    transitionLeaveTimeout: PropTypes.number,
    onClose: PropTypes.func
  };

  static defaultProps = {
    isOpen: false,

  }

  componentDidMount() {
    this.portalContainer = getPortalContainer();

    if (this.props.isOpen) {
      this.mountPortal(this.props);
    }
  }

  componentDidUpdate() {
    const { isOpen } = this.props;

    if (isOpen) {
      this.mountPortal(this.props);
    } else {
      this.unmountPortal();
    }
  }

  componentWillUnmount() {
    this.unmountPortal();
  }

  mountPortal(props) {
    if (!this.container) {
      this.container = document.createElement('div');
      this.portalContainer.appendChild(this.container);
    }

    ReactDOM.render(<ModalPortal {...props} />, this.container);
  }

  unmountPortal() {
    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container);
    }
  }

  render() {
    return null;
  }
}