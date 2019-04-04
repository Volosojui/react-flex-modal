import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Modal from '../src/Modal';

class SampleApp extends Component {
  constructor() {
    super();

    this.state = {
      isVisibleModal: false,
      isToggledModalContent: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleModalContent = this.toggleModalContent.bind(this);
  }

  openModal() {
    this.setState({isVisibleModal: true});
  }

  closeModal() {
    this.setState({isVisibleModal: false});
  }

  toggleModalContent() {
    this.setState({isToggledModalContent: !this.state.isToggledModalContent});
  }

  render() {
    return (
      <div>
        <button
          className="button"
          onClick={this.openModal}
        >
          Show Modal
        </button>
        <Modal
          isOpen={this.state.isVisibleModal}
          modalClass="Modal--test"
          modalDialogClass="Modal__dialog--test"
          transition={true}
          onClose={this.closeModal}
        >
          {this.renderModalContent()}
        </Modal>
      </div>
    );
  }

  renderModalContent() {
    const isToggled = this.state.isToggledModalContent;

    if (isToggled) {
      return (
        <p>New content</p>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleModalContent}>Toggle Modal Content</button>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      );
    }
  }
}

ReactDOM.render(<SampleApp />, document.querySelector('[data-app]'));