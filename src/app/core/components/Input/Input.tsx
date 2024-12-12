import React, { ReactElement } from 'react';

export type InputProps = {
  type?: 'text';
};

const defaultInputPros: InputProps = {
  type: 'text',
};

export const Input = React.memo(({ type } = defaultInputPros): ReactElement => {
  return <input type={type} />;
});
