import isClient from './isClient';

const STYLES = `
  width: 100px;
  height: 100px;
  position: fixed;
  top: -9999px;
  left: -9999px;
  z-index: -1;
  overflow: scroll;
  visibility: hidden;
`.replace(/\s+/g, '');

const getScrollbarSize = () => {
  if (!isClient()) {
    return 0;
  }

  const body = document.body;
  const elementWithScrollbar = document.createElement('div');

  elementWithScrollbar.setAttribute('style', STYLES);
  body.appendChild(elementWithScrollbar);

  const scrollbarWidth = elementWithScrollbar.offsetWidth - elementWithScrollbar.clientWidth;

  body.removeChild(elementWithScrollbar);

  return scrollbarWidth;
};

export default getScrollbarSize;
