import React from "react";
import './button.css';

export default function Theme2outlined({ onClick }) {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = React.useState('');
  const [textColor, setTextColor] = React.useState(''); // New state for text color
  const [borderColor, setBorderColor] = React.useState(''); // New state for border color

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);

      setTimeout(() => {
        setIsRippling(false);
        setIsDisabled(true);
        setBackgroundColor('#16171d');
        setTextColor('#626367'); // Change text color
        setBorderColor('#545558'); // Change border color
      }, 300);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) {
      setCoords({ x: -1, y: -1 });
    }
  }, [isRippling]);

  return (
    <button
      className="ripple-button"
      onClick={(e) => {
        if (!isDisabled) {
          const rect = e.target.getBoundingClientRect();
          setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          onClick && onClick(e);
        }
      }}
      disabled={isDisabled}
      style={{ backgroundColor, color: textColor, borderColor }} // Apply the new styles
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ''
      )}
      Button
    </button>
  );
};
