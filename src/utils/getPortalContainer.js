const ATTR_NAME_SELECTOR = 'data-modal-container';

const getPortalContainer = () => {
  let container = document.querySelector(`[${ATTR_NAME_SELECTOR}]`);

  if (container === null) {
    container = document.createElement('div');
    container.setAttribute(ATTR_NAME_SELECTOR, '');
    document.body.appendChild(container);
  };

  return container;
};

export default getPortalContainer;