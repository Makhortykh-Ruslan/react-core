import React, { FC, memo } from 'react';
import { InputTypes } from '../../types/input-types.ts';

export type InputProps = {
  type?: InputTypes;
};

const defaultInputProps: InputProps = {
  type: 'text',
};

const InputComponent: FC<InputProps> = ({ type = defaultInputProps.type }) => {
  return <input type={type} />;
};

export const Input = memo(InputComponent);
