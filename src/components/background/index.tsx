import { DivStyledBackground } from "./styled";
import backgroud from "../../assets/backgroudGray.png";

export const Background = () => {
  return (
    <DivStyledBackground>
      <img src={backgroud} alt="background" />
      <div>
        <h1>Venha conhecer nossas</h1>
        <h2>promoções</h2>
        <h3>50% Off nos produtos</h3>
        <button>Ver produto</button>
      </div>
    </DivStyledBackground>
  );
};
