import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import {get} from 'lodash';

type Props = {
  match: Object,
};

const Sidebar = ({match}: Props) => {
  const links = [
    {text: 'Dashboard', icon: 'dashboard', path: 'dashboard', key: 'dashboard'},
    {text: 'Orders', icon: 'tags', path: 'orders', key: 'orders'},
    {
      text: 'Settings',
      icon: 'setting',
      path: 'settings',
      key: 'settings',
    },
  ];

  const selectedKeys = links
    .filter(({path}) => RegExp(path).test(get(match, 'path')))
    .map(({text}) => text);
  if (selectedKeys.length > 1) selectedKeys.shift();

  return (
    <Layout.Sider
      theme="light"
      width={250}
      style={{
        paddingTop: '2rem',
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        padding: 20,
      }}
    >
      <Link to="/">
        <p style={{fontSize: 30, fontWeight: 600}}>TheLoGo</p>
      </Link>
      <Menu
        theme="light"
        defaultSelectedKeys={['1']}
        mode="inline"
        style={{borderRight: 0}}
        selectedKeys={selectedKeys}
      >
        {links.map(({text, icon, path}) => (
          <Menu.Item key={text}>
            <span>{text}</span>
            <Link to={`/${path}`} />
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
