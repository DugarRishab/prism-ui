import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

// This is just an example to serve as an example on how to make proper components
// This will be rewritten soon

const Button = ({ text, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button className="pui-button" onClick={handleClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Button;
