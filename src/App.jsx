import Header from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import Feed from './components/Feed';

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Feed />
        </main>
      </div>
    </div>
  );
};
