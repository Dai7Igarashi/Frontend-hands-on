import * as React from 'react';
import {
  TYPE_OF_REDDIT
} from '../store/state';

interface PickerProps {
  value: TYPE_OF_REDDIT;
  handlePickerChange(value: string): void;
  options: Array<TYPE_OF_REDDIT>;
}

const Picker: React.SFC<PickerProps> = props => {
  const { value, handlePickerChange, options } = props;

  return (
    <span>
      <h1>{value}</h1>
      <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handlePickerChange(e.target.value)} value={value}>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </span>
  );
}

export default Picker;
