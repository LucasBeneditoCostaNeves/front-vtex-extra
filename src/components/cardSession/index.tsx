import { DivStyledCardSession } from "./styled";
import logo from "../../assets/loja.png";

export const CardSession = () => {
  return (
    <DivStyledCardSession>
      <div className="full">
        <img src={logo} alt="loja" />
        <div className="content">
          <h2>Parceiros</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur</h4>
          <button>CONFIRA</button>
        </div>
      </div>
    </DivStyledCardSession>
  );
};
