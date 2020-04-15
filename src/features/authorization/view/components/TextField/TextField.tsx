import React from 'react';
import block from 'bem-cn';

import './TextField.scss';

const b = block('text-field');

interface IProps {
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField(props: IProps) {
  const { value, onChange } = props;
  return (
    <input
      required
      className={b()}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)}
    />
  );
}

export { TextField };
