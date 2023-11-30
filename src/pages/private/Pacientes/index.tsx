import { useForm } from 'react-hook-form';
import styles from './pacientes.module.css';
import { Input } from '../../../components/Form/Input';

export function CadPacientes() {
  const {
    handleSubmit: onSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm()


  return (
    <div className={styles.container}>
      <section className={styles["form-body"]}>
        <header>
          <h3>Cadastro de Pacientes</h3>

          <button>Listagem de Pacientes</button>
        </header>

        <form>
          <div className={styles["form-line"]}>
            <Input name='name' label='Nome Completo' control={control} />

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

