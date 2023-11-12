import styles from './home.module.css'

export function Home () {
  return (
    <div className={styles.background}>
      <main className={styles.container}>
        <aside></aside>

        <div className={styles.content}>
          <header className={styles.header}>
            <img src="/images/logo.svg" alt="" />

            <div className={styles['header-actions']}>
              <button>user</button>
              <button>notification</button>
            </div>
          </header>

        </div>

      </main>
    </div>
  );
}