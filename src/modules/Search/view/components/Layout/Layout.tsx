import * as React from 'react';
import block from 'bem-cn';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import { routes } from '../../../routes';
import './Layout.scss';

type IProps = RouteComponentProps & React.ComponentProps<'div'>;

const b = block('layout');

function Layout(props: IProps) {
  const { children, location } = props;

  return (
    <div className={b()}>
      <header className={b('header')}>
        Search for:
        <div className={b('tabs')}>
          {renderTab(routes.search.users.getRoutePath(), 'Users')}
          {renderTab(routes.search.repositories.getRoutePath(), 'Repositories')}
        </div>
      </header>
      {children}
      <footer className={b('footer')}>
        <a className={b('company-link')} href="https://fullstack-development.com" target="_blank">
          Fullstack Development
        </a>
      </footer>
    </div>
  );

  function renderTab(path: string, title: string) {
    return (
      <Link to={path} className={b('navigation-link')}>
        <div className={b('tab', { active: path === location.pathname })}>
          {title}
        </div>
      </Link>
    );
  }
}

export default withRouter(Layout);
