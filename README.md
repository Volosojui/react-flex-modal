# ReactJS Modal
Modal component for ReactJS

## Run example

```shell
git clone https://github.com/Volosojui/react-flex-modal
cd react-flex-modal
npm install
npm start
open http://localhost:9000
```

## Install

```shell
npm install react-flex-modal --save
```

## Usage

```jsx
import React from 'react';
import Modal from 'react-flex-modal';

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

It should be equal to `position` property specified in the styles.

#### transition
Type: `bool`

Default: `false`

*Use it only if you want to add the opening and closing CSS animations. You should specify the required styles within certain classes.* See in the [CSS classes](#css-classes).

Enable/Disable timer for the opening and closing CSS transitions. If enabled, you should set `transitionEnterTimeout` and `transitionLeaveTimeout`.

#### transitionEnterTimeout
Type: `number`

Default: `300` ms

The duration of CSS transition when the modal window is opening.
It should be equal to the sum of the greatest duration and the greatest delay specified in `transition` property of CSS rule `.Modal--enter.Modal--enter-active`. See in the [CSS classes](#css-classes).

For example:
```css
/*
  transition-duration = .3s = 300ms
  transition-delay = 0s = 0ms
  transitionLeaveTimeout = 300ms + 0s = 300ms
 */

.Modal--enter.Modal--enter-active {
  ...
  transition: transform .3s ease, opacity .3s ease;
}
```

#### transitionLeaveTimeout
Type: `number`

Default: `300` ms

The duration of CSS transition when the modal window is closing.
It should be equal to the sum of the greatest duration and the greatest delay specified in `transition` property of CSS rule `.Modal--leave.Modal--leave-active`. See in the [CSS classes](#css-classes).

For example:
```css
/*
  transition-duration = .3s = 300ms
  transition-delay = .1s = 100ms
  transitionLeaveTimeout = 300ms + 100ms = 400ms
 */

.Modal--leave.Modal--leave-active {
  ...
  transition: transform .2s ease, opacity .3s ease .1s;
}
```

## CSS

The package does not include CSS styles, so you can customize the appearance of modal as you wish.

### Animation classes

#### .Modal--enter
Defines the beginning of the modal window opening.

#### .Modal--enter.Modal--enter-active
Defines the actual opening.

#### .Modal--leave
Defines the beginning of the modal window closing.

#### .Modal--leave.Modal--leave-active
Defines the actual closing.

```css

.Modal--enter {
  opacity: 0;
}

.Modal--enter.Modal--enter-active {
  opacity: 1;
  transition: opacity .3s ease;
}

.Modal--leave {
  opacity: 1;
}

.Modal--leave.Modal--leave-active {
  opacity: 0;
  transition: opacity .3s ease;
}
```

## License