import styles from './home.module.css'

export function Home () {
  return (
    <div className={styles.background}>
      <main className={styles.container}>
        <aside className={styles.sidebar}> 
              <button>pRescrição</button>
              <button>Paciente</button>                
              <button>Resumo de alta</button>
              <button>aDmissão</button>                
              <button>Exames</button>
              <button>Evolução Diária</button>                
              <button>evoLução Noturna</button>
              <button>enferMagem</button>                
        </aside>

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