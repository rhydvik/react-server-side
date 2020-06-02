import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import styles from './about.module.scss';

import {getProfile, updateProfile} from '../../redux/modules/user';

type Props = {
  dispatch: Function,
  user: Object,
};

const About = ({dispatch, user}: Props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const temp = [...new Array(100).fill('100')];
    setItems(temp);
    dispatch(getProfile());
  }, [dispatch]);

  const handleNameChange = () => {
    dispatch(updateProfile());
  };

  return (
    <div>
      <h1 className={styles.title}>About page</h1>
      <NavLink to="/">Home</NavLink>
      <p>{user && user.name}</p>
      <button onClick={handleNameChange}>Load Profile</button>
      {items.map((item, i) => (
        <h1 key={`${item}-${i}}`}>{i}</h1>
      ))}
    </div>
  );
};

const mapStateToProps = ({user}) => ({
  user,
});

export default connect(mapStateToProps)(About);
