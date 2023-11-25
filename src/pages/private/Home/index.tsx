import { Link } from 'react-router-dom';

import styles from "./home.module.css";

export function Home() {
  return (
    <div className={styles.background}>
      <main className={styles.container}>
        <aside className={styles.sidebar}>
          <Link to="/CadPacientes">Pacientes</Link>
          <Link to="/Prescricoes">Prescrição UTI</Link>
          <Link to="/Resumoalta">Resumo de Alta</Link>
          <Link to="/Admissao">Admissão</Link>
          <Link to="/Exames">Exames</Link>
          <Link to="/Evolucaodiaria">Evolução Diária</Link>
          <Link to="/Evolucaonoturna">Evolução Noturna</Link>         
          <Link to="/Evolucaoenfermagem">Evolução Enfermagem</Link>         
        </aside>

        <div className={styles.content}>
          <header className={styles.header}>
            <img src="/images/logo.svg" alt="" />

            <div className={styles["header-actions"]}>
              <button>user</button>
              <button>notification</button>
            </div>
          </header>

          <div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
