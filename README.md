# ReactJS Modal
Modal component for ReactJS

## Run example

```
git clone https://github.com/Volosojui/react-js-modal
cd react-js-modal
npm install
npm start
open http://localhost:9000
```

## Usage

```jsx
import React from 'react';
import Modal from 'react-js-modal';

class MyModal extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={true}
        >
          Modal content
        </Modal>
      </div>
    );
  }
}

```

## Props

#### children
Type: `node`
The contents of the modal window

#### isOpen
Type: `bool`
Default: `false`
If `true`, then the modal window is visible, otherwise is hidden.

#### onClose
Type: `func`
Default: `undefined`
The callback function that will be called when the modal window is closed.

#### position
Type: `string`
Default: `fixed`
It should be equal to `position` CSS-property specified in styles

#### transition
Type: `bool`
Default: `false`
Enable/Disable timer for CSS transition. If enabled, you should set `transitionEnterTimeout` and `transitionLeaveTimeout`.
Use it only if you want to add CSS animation.

#### transitionEnterTimeout
Type: `number`
Default: `300` ms
The duration of enter-transition. It should be equal to the duration of transition specified in CSS enter-classes.

#### transitionLeaveTimeout
Type: `number`
Default: `300` ms
The duration of leave-transition. It should be equal to the duration of transition specified in CSS leave-classes.

## CSS classes

## License