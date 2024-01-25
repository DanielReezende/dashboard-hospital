import { useForm } from "react-hook-form";

// Components
import { Input } from "../../../components/Form/Input";
import { Select } from "../../../components/Form/Select";

// Helpers
import { genres } from "../../../helpers/constants";

import styles from "./pacientes.module.css";

export function CadPacientes() {
  const {
    handleSubmit: onSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.container}>
      <section className={styles["form-body"]}>
        <header>
          <h3>Cadastro de Pacientes</h3>

          <button>Listagem de Pacientes</button>
        </header>

        <form>
          <div className={styles["form-line"]}>
            <Input name="name" label="Nome Completo" control={control} />

            <div className={styles["input-group"]}>
              <input type="text" placeholder="Endereço" />

              <Input
                name="birthdate"
                label="Data de nascimento"
                control={control}
                mask="99/99/9999"
              />
            </div>
          </div>
          <div className={styles["form-line"]}>
            <Select
              altText="Selecione seu gênero"
              control={control}
              name="genre"
              label="Gênero"
              options={genres}
              id="genre"
            />
          </div>

          <input type="text" placeholder="Data de nascimento" />
        </form>
      </section>
    </div>
  );
}
