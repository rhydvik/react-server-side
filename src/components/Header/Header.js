/* @flow */
import React from 'react';
import {Col, Row, Button} from 'antd';
import {get} from 'lodash';

import styles from './style.module.scss';
import {Link} from 'react-router-dom';

type Props = {
  match: Object,
  theme?: string,
};

const color = {
  dark: 'white',
  light: 'black',
};

const Header = ({theme = 'light', match}: Props) => {
  const currentPath = get(match, 'path');
  const navLinks = [
    {
      path: '/login',
      text: 'Login',
    },
    {
      path: '/signup',
      text: 'Sign Up',
    },
  ];

  const filteredNavLinks = navLinks.filter(item => item.path !== currentPath);

  return (
    <Row className={styles.container}>
      <Col span={6}>
        <Link to="/">
          <p style={{fontWeight: 800, fontSize: 25, color: color[theme]}}>
            TheLoGo
          </p>
        </Link>
      </Col>
      <Col span={18} className={styles.menuContainer}>
        {filteredNavLinks.map(({path, text}) => (
          <Link key={text} to={path}>
            <Button shape="round" className={styles.buttons}>
              {text}
            </Button>
          </Link>
        ))}
      </Col>
    </Row>
  );
};

export default Header;
