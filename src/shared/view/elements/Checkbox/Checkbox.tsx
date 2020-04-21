import React from 'react';
import block from 'bem-cn';

import './Checkbox.scss';

const b = block('checkbox');

interface IProps {
  text: string;
}

function Checkbox(props: IProps) {
  const { text } = props;

  return (
    <label className={b()}>
      <input type="checkbox" className={b('input')} />
      <p className={b('description')}>{text}</p>
    </label>
  );
}

export { Checkbox };
