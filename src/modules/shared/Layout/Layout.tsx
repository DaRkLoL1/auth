import React from 'react';
import block from 'bem-cn';

import './Layout.scss';

const b = block('layout');

interface IProps {
  children: React.ReactNode
}

const Layout = (props: IProps) => {
  const { children } = props;
  return (
    <div className={b()}>
      <main className={b('content')}>
        <div className={b('form')}>
          {children}
        </div>
      </main>
    </div>
  );
};

export { Layout };
