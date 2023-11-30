import styles from './pacientes.module.css';

export function CadPacientes() {
  return (
    <div className={styles.container}>
      <section className={styles["form-body"]}>
        <header>
          <h3>Cadastro de Pacientes</h3>

          <button>Listagem de Pacientes</button>
        </header>

        <form>
          <div className={styles["form-line"]}>
            <input type="text" placeholder="Nome" />

            <div className={styles["input-group"]}>
              <input type="text" placeholder="Endereço" />
              <input type="text" placeholder="Data de nascimento" />
            </div>
          </div>

          <input type="text" placeholder="Data de nascimento" />
        </form>
      </section>
    </div>
  );
}

