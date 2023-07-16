import React, {useEffect} from 'react';
import styles from '../styles/Feed.module.css';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ScrollList from '../components/Feed/ScrollList';
import { useAppDispatch } from '../Hooks/Hooks';
import {
  WS_CONNECTION, WS_CLOSE
} from '../services/actions/constants';
import { FC } from 'react';
import { useAppSelector } from '../Hooks/Hooks';

interface IProfileOrders {
  setActivator: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileOrders: FC<IProfileOrders> = ({ setActivator }) => {
  const { token } = useAppSelector((state) => state.tokenReducer);
  const accessToken = token.slice(7);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION,
      payload: `?token=${accessToken}`,
    });
    return () => {
      dispatch({
        type: WS_CLOSE,
      });
    };
  }, []);

  return (
    <section className={styles.profileOrdersSection}>
      <div className={styles.sidebarContainer + ' mr-15'}>
        <ProfileSidebar />
      </div>
      <ScrollList setActivator={setActivator} />
    </section>
  );
};

export default ProfileOrders;