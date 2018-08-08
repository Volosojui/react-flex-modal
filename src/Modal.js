import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ModalPortal from './ModalPortal';

const getParentContainer = () => {
  let container = document.querySelector('[data-modal-container]');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('data-modal-container', '');
    document.body.appendChild(container);
  }

  return container;
}

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    position: PropTypes.string,
    transition: PropTypes.bool,
    transitionEnterTimeout: PropTypes.number,
    transitionLeaveTimeout: PropTypes.number
  };

  static defaultProps = {
    isOpen: false
  }

  componentDidMount() {
    const { props } = this;

    this.parentContainer = getParentContainer();

    if (props.isOpen) {
      this.mountPortal(props);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen) {
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
      this.parentContainer.appendChild(this.container);
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