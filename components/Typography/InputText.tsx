import React, { FC, useState, ChangeEvent } from 'react';

interface InputTextProps {
  labelTitle: string;
  labelStyle: string;
  type?: string;
  containerStyle: string;
  defaultValue: string;
  placeholder?: string;
  updateFormValue: (value: { updateType: string; value: string }) => void;
  updateType: string;
}

const InputText: FC<InputTextProps> = ({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
}) => {
  const [value, setValue] = useState<string>(defaultValue);

  const updateInputValue = (val: string) => {
    setValue(val);
    updateFormValue({ updateType, value: val });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateInputValue(e.target.value);
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={`label-text text-base-content ${labelStyle}`}>
          {labelTitle}
        </span>
      </label>
      <input
        type={type || 'text'}
        value={value}
        placeholder={placeholder || ''}
        onChange={handleChange}
        className="input  input-bordered w-full "
      />
    </div>
  );
};

export default InputText;