import { useForm } from "react-hook-form";

// Components
import { Input } from "../../../components/Form/Input";
import { Select } from "../../../components/Form/Select";

// Helpers
import { genres } from "../../../helpers/constants";

import styles from "./pacientes.module.css";


interface FormData {
  name: string;
  address: string;
  genre: "masculino" | "feminino" | undefined;
  birthdate: string;
}

export function CadPacientes() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur"
  });

  function handleNewPacient(data: FormData) {
    console.log(data.name);
  }

  return (
    <div className={styles.container}>
      <section className={styles["form-body"]}>
        <header>
          <h3>Cadastro de Pacientes</h3>

          <button>Listagem de Pacientes</button>
        </header>

        <form onSubmit={handleSubmit(handleNewPacient)}>
          <div className={styles["form-line"]}>
            <Input name="name" label="Nome Completo" control={control} />
          </div>

          <div className={styles["form-line"]}>
            <div className={styles["input-group"]}>
              <Input name="address" label="Endereço" control={control} />

              <Input
                name="birthdate"
                label="Data de nascimento"
                control={control}
                mask="00/00/0000"
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
          <button type="submit">Cadastrar Paciente</button>
        </form>
      </section>
    </div>
  );
}
