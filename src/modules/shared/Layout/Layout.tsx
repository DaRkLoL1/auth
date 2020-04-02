import React from 'react';
import block from 'bem-cn';
import { Link } from 'react-router-dom';
import './Layout.scss';

import { routes } from '../../routes';


const b = block('layout');

const Layout = (props: any) => {
  const getLinks = () => {
    const linkTitles = [
      {
        title: 'Account',
        id: 1,
      },
      {
        title: 'Sign In',
        id: 2,
      },
      {
        title: 'Sign Up',
        id: 3,
      },
      {
        title: 'Restore',
        id: 4,
      },
    ];

    const routePaths = [
      routes.auth.account.getRoutePath(),
      routes.auth.signIn.getRoutePath(),
      routes.auth.signUp.getRoutePath(),
      routes.auth.restore.getRoutePath(),
    ];

    return (
      <>
        {linkTitles.map((link, index) => (
          <li className={b('item')} key={link.id}>
            <Link className={b('link')} to={routePaths[index]}>{link.title}</Link>
          </li>
        ))}
      </>
    );
  };

  const { children } = props;
  return (
    <div className={b()}>
      <header className={b('header')}>
        <nav className={b('nav')}>
          <ul className={b('list')}>
            {getLinks()}
          </ul>
        </nav>
      </header>
      <main className={b('content')}>
        <div className={b('wrapper')}>
          {children}
        </div>
      </main>
    </div>
  );
};

export { Layout };
