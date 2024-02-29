import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

// Function for creating a DOM element with the specified identifier
const createDomElement = Id => {
  const div = document.createElement('div');
  div.setAttribute('id', Id);
  document.body.appendChild(div);
  return div;
};

// Portal component that dynamically creates and manages portal containers
const Portal = ({ children, containerId = 'modal' }) => {
  // State to store the portal container
  const [container, setContainer] = useState(null);

  useEffect(() => {
    // Find an existing container with the specified identifier
    let container = document.getElementById(containerId);
    let containerCreated = false;

    // If the container is not found, create a new one
    if (!container) {
      containerCreated = true;
      container = createDomElement(containerId);
    }

    // Set the container in the component state
    setContainer(container);

    // Clear the container when the component is unmounted
    return () => {
      if (containerCreated && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, [containerId]);

  // If the container has not been created yet, return null
  if (container === null) return null;

  // Render the child elements in the portal container
  return createPortal(children, container);
};

// PropTypes validation for the Portal component props
Portal.propTypes = {
  children: PropTypes.node, // Children elements of the portal
  containerId: PropTypes.string.isRequired, // Identifier of the portal container
};

export default Portal;
