import React, { useState } from 'react';

interface CheckboxProps {
  id: string;
  initialChecked?: boolean;
  onChangeCheckbox: ({ name, checked }: { name: string; checked: boolean }) => void;
  customClassCheckbox?: string;
  checkedOnLabel?: string;
  checkedOffLabel?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  initialChecked = false,
  onChangeCheckbox,
  customClassCheckbox = '',
  checkedOnLabel = '',
  checkedOffLabel = '',
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(initialChecked);

  const handleCheckboxChange = (): void => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChangeCheckbox({ name: id, checked: newCheckedState });
  };

  return (
    <label htmlFor={id} className={`flex items-center`}>
      <input
        id={id}
        checked={isChecked}
        onChange={handleCheckboxChange}
        type="checkbox"
        className={`w-4 h-4 accent-primary border-solid rounded hover:border-deep-blue ${customClassCheckbox}`}
      />
      <span className="ml-2">{isChecked ? checkedOnLabel : checkedOffLabel}</span>
    </label>
  );
};

export default Checkbox;
