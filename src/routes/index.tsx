import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from "../pages/private/Home";

import { CadPacientes } from "../pages/private/Pacientes";
import { Prescricoes } from "../pages/private/Prescricoes";
import { Resumoalta } from "../pages/private/Resumoalta";
import { Admissao } from "../pages/private/Admissao";
import { Exames } from "../pages/private/Exames";
import { Evolucaodiaria } from "../pages/private/Evolucaodiaria";
import { Evolucaonoturna } from "../pages/private/Evolucaonoturna";
import { Evolucaoenfermagem } from "../pages/private/Evolucaoenfermagem";

export function Routers() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CadPacientes" element={<CadPacientes />} />
      <Route path="/Prescricoes" element={<Prescricoes />} />
      <Route path="/Resumoalta" element={<Resumoalta />} />
      <Route path="/Admissao" element={<Admissao />} />
      <Route path="/Exames" element={<Exames />} />
      <Route path="/Evolucaodiaria" element={<Evolucaodiaria />} />
      <Route path="/Evolucaonoturna" element={<Evolucaonoturna />} />
      <Route path="/Evolucaoenfermagem" element={<Evolucaoenfermagem />} />
    </Routes>
  );
}
