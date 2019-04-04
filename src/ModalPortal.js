import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const KEYCODES = {
  ESCAPE: 27
};

const MAIN_CLASS = 'Modal';
const ROOT_CLASS_OPEN = MAIN_CLASS + '-open';
const MAIN_CLASS_OPEN = MAIN_CLASS + '--open';
const MAIN_CLASS_TRANSITION_ENTER = MAIN_CLASS + '--enter';
const MAIN_CLASS_TRANSITION_ENTER_ACTIVE = MAIN_CLASS + '--enter-active';
const MAIN_CLASS_TRANSITION_LEAVE = MAIN_CLASS + '--leave';
const MAIN_CLASS_TRANSITION_LEAVE_ACTIVE = MAIN_CLASS + '--leave-active';

class ModalPortal extends Component {
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
    position: 'fixed',
    transition: false,
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300
  };

  state = {
    enter: false,
    enterActive: false,
    leave: false,
    leaveActive: false
  }

  constructor(props) {
    super(props);

    this.willClose = true;
    this.scrollTop = 0;
    this.doc = document.documentElement;
  }

  componentDidMount() {
    this.storedActiveElement = document.activeElement;
    this.scrollTop = window.pageYOffset || this.doc.scrollTop;

    setTimeout(() => {
      this.enforceFocus();
    }, 0);

    if (this.props.transition) {
      this.transitionTimeStart = new Date();

      this.setState({enter: true}, () => {
        this.setState({enterActive: true});

        this.enterTimer = setTimeout(() => {
          this.setState({enter: false, enterActive: false});
        }, this.props.transitionEnterTimeout);
      });
    }

    this.addRootClass();

    if (this.props.position == 'fixed') {
      document.body.style.paddingRight = this.getScrollbarSize() + 'px';
      this.doc.style.position = 'fixed';
      this.doc.style.width = '100%';
      this.doc.style.top = -this.scrollTop + 'px';
      this.doc.style.overflow = 'hidden';
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!(document.activeElement === this.modal || this.modal.contains(document.activeElement))) {
      this.enforceFocus();
    }
  }

  componentWillUnmount() {
    if (this.enterTimer) clearTimeout(this.enterTimer);
    if (this.leaveTimer) clearTimeout(this.leaveTimer);

    this.storedActiveElement.focus();
    this.storedActiveElement = null;

    this.removeRootClass();

    if (this.props.position == 'fixed') {
      document.body.style.paddingRight = '';
      this.doc.style.position = '';
      this.doc.style.width = '';
      this.doc.style.top = '';
      this.doc.style.overflow = '';
      window.scrollTo(0, this.scrollTop);
    }
  }

  onCloseClick = () => {
    this.close();
  }

  onInsideDialogClick = (e) => {
    this.willClose = false;
  }

  onKeyDown = (e) => {
    if (e.keyCode === KEYCODES.ESCAPE && this.props.isOpen) {
      this.close();
    }
  }

  onOutsideDialogClick = (e) => {
    if (this.willClose) this.close();
    this.willClose = true;
  }

  getScrollbarSize() {
    var scroller = document.createElement('div');

    scroller.style.width = '100px';
    scroller.style.overflow = 'scroll';
    document.body.appendChild(scroller);

    return scroller.offsetWidth - scroller.clientWidth;
  }

  getTransitionLeaveTimeout() {
    return Math.min(this.transitionTimeEnd - this.transitionTimeStart, this.props.transitionLeaveTimeout);
  }

  addRootClass() {
    document.documentElement.classList.add(ROOT_CLASS_OPEN);
  }

  close() {
    if (!this.props.transition) {
      this.props.onClose();
    } else {
      if (this.enterTimer) {
        clearTimeout(this.enterTimer);
      }

      if (!this.state.leave) {
        this.setState({leave: true}, () => {
          this.setState({leaveActive: true});

          this.transitionTimeEnd = new Date();

          this.leaveTimer = setTimeout(() => {
            this.setState({leave: false, leaveActive: false});
            this.props.onClose();
          }, this.getTransitionLeaveTimeout());
        });
      }
    }
  }

  enforceFocus() {
    this.modal.focus();
  }

  removeRootClass() {
    document.documentElement.classList.remove(ROOT_CLASS_OPEN);
  }

  render() {
    const {
      children,
      isOpen,
      modalClass,
      modalDialogClass
    } = this.props
    const {
      enter,
      enterActive,
      leave,
      leaveActive
    } = this.state;

    let mainClassNames = classNames({
      [MAIN_CLASS]: true,
      [modalClass]: modalClass,
      [MAIN_CLASS_OPEN]: isOpen,
      [MAIN_CLASS_TRANSITION_ENTER]: enter,
      [MAIN_CLASS_TRANSITION_ENTER_ACTIVE]: enterActive,
      [MAIN_CLASS_TRANSITION_LEAVE]: leave,
      [MAIN_CLASS_TRANSITION_LEAVE_ACTIVE]: leaveActive
    });

    // TODO: Need to add role attribute
    return (
      <div
        ref={m => { this.modal = m; }}
        className={mainClassNames}
        tabIndex={-1}
        onKeyDown={this.onKeyDown}
        onClick={this.onOutsideDialogClick}
      >
        <div className={`${MAIN_CLASS}__layout`}>
          <div
            className={classNames({
              [`${MAIN_CLASS}__dialog`]: true,
              [modalDialogClass]: modalDialogClass
            })}
            onClick={this.onInsideDialogClick}
          >
            <button
              className={`${MAIN_CLASS}__close`}
              onClick={this.onCloseClick}
            >
              <span className={`${MAIN_CLASS}__close-icon`} />
              <span className={`${MAIN_CLASS}__close-text`}>Close</span>
            </button>
            <div className={`${MAIN_CLASS}__content`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPortal;