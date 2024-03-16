import React from 'react';

interface RadioButtonProps {
  onClick: () => void;
}

export const RadioButton = ({ onClick }: RadioButtonProps) => {
  return (
    <form>
      <button onClick={onClick}>
        <input type="radio" id="small" name="size" required />
        <label htmlFor="small">Pequeno</label>
        <input type="radio" id="large" name="size" required />
        <label htmlFor="large">Grande</label>
      </button>
    </form>
  );
};