import { CardSession } from "../cardSession";
import { DivStyledSession } from "./styled";
import logo from "../../assets/logo.png";

export const Session = () => {
  return (
    <DivStyledSession>
      <div className="flex">
        <CardSession />
        <CardSession />
      </div>
      <h2 className="title">Produtos relacionados</h2>
      <span>Ver Todos</span>
      <div className="flex">
        <CardSession />
        <CardSession />
      </div>
      <h2 className="title">Navegue por marcas</h2>
      <div className="logos">
        <img src={logo} alt="logo" />
        <img src={logo} alt="logo" />
        <img src={logo} alt="logo" />
        <img src={logo} alt="logo" />
        <img src={logo} alt="logo" />
      </div>
    </DivStyledSession>
  );
};
