import React from 'react';
import block from 'bem-cn';

import './TextField.scss';

const b = block('text-field');

interface IProps {
  type: string;
  value: string;
  onChange: (event: any) => void;
}

function TextField(props: IProps) {
  const { type, value, onChange } = props;
  return (
    <input className={b()} type={type} value={value} onChange={(event: any) => onChange(event)} />
  );
}

export { TextField };
