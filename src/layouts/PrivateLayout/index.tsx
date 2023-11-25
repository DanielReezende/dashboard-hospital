import { Outlet } from 'react-router-dom';

// Components
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import styles from './private.layout.module.css';

export function PrivateLayout() {
  return (
    <div className={styles.background}>
      <main className={styles.container}>
        <Sidebar />

        <div className={styles.content}>
          <Header />

          <Outlet />
        </div>
      </main>
    </div>
  );
}
