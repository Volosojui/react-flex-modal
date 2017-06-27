import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ModalPortal from './ModalPortal';

function getParentContainer(){
  let container = document.querySelector('[data-modal-container]');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('data-modal-container', '');
    document.body.appendChild(container);
  }

  return container;
}

class Modal extends Component {
  static propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    onClose: React.PropTypes.func,
    position: React.PropTypes.string,
    transition: React.PropTypes.bool,
    transitionEnterTimeout: React.PropTypes.number,
    transitionLeaveTimeout: React.PropTypes.number,
    children: React.PropTypes.node
  };

  componentDidMount() {
    const props = this.props;

    this.parentContainer = getParentContainer();

    if (props.isOpen) {
      this.mountCombo(props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      this.mountCombo(nextProps);
    } else {
      this.unmountCombo();
    }
  }

  componentWillUnmount() {
    this.unmountCombo();
  }

  mountCombo(props) {
    if (!this.container) {
      this.container = document.createElement('div');
      this.parentContainer.appendChild(this.container);
    }

    ReactDOM.render(<ModalPortal {...props} />, this.container);
  }

  unmountCombo() {
    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container);
    }
  }

  render() {
    return null;
  }
}

export default Modal;