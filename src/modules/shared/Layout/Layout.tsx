import React from 'react';
import block from 'bem-cn';
import { Link } from 'react-router-dom';

import { routes } from '../../routes';
import './Layout.scss';

const b = block('layout');

interface IProps {
  children: React.ReactNode
}

const Layout = (props: IProps) => {
  const getLinks = () => {
    const linkTitles = [
      {
        title: 'Account',
        href: routes.auth.account.getRoutePath(),
        id: 1,
      },
      {
        title: 'Sign In',
        href: routes.auth.signIn.getRoutePath(),
        id: 2,
      },
      {
        title: 'Sign Up',
        href: routes.auth.signUp.getRoutePath(),
        id: 3,
      },
      {
        title: 'Restore',
        href: routes.auth.restore.getRoutePath(),
        id: 4,
      },
    ];

    return (
      <>
        {linkTitles.map(link => (
          <li className={b('item')} key={link.id}>
            <Link className={b('link')} to={link.href}>{link.title}</Link>
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
        <div className={b('form')}>
          {children}
        </div>
      </main>
    </div>
  );
};

export { Layout };
