import React, { FC, memo } from 'react';
import { InputTypes } from '../../types/input-types.ts';

export type InputProps = {
  type?: InputTypes;
  label: string;
  placeholder: string;
  value: any;
  onChange: (value: any) => void;
};

const defaultInputProps: InputProps = {
  label: '',
  type: 'text',
  placeholder: '',
  value: '',
  onChange: () => {},
};

const InputComponent: FC<InputProps> = ({
  label = defaultInputProps.label,
  type = defaultInputProps.type,
  value = defaultInputProps.value,
  placeholder = defaultInputProps.placeholder,
  onChange = defaultInputProps.onChange,
}) => {
  return (
    <div>
      <p>{label || ''}</p>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export const Input = memo(InputComponent);
