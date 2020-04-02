import React from 'react';
import block from 'bem-cn';

import './Button.scss';

const b = block('button');

interface IProps {
  text: String;
}

function Button(props: IProps) {
  const { text } = props;

  return <button className={b()} type="submit">{text}</button>;
}

export { Button };
