import escudo from "../../assets/escudo.png";
import truck from "../../assets/truck.png";
import card from "../../assets/creditCard.png";
import { DivStyledTopHeader } from "./styled";

export const DivTopHeader = () => {
  return (
    <DivStyledTopHeader>
      <div className="text-content">
        <img src={escudo} />
        <h6 className="h6-gray">Compra</h6>
        <h6 className="h6-pink">100% segura</h6>
      </div>
      <div className="text-content">
        <img src={truck} />
        <h6 className="h6-pink">Frete grátis</h6>
        <h6 className="h6-gray"> acima de R$ 200</h6>
      </div>
      <div className="text-content">
        <img src={card} />
        <h6 className="h6-pink">Parcele</h6>
        <h6 className="h6-gray">Suas compras</h6>
      </div>
    </DivStyledTopHeader>
  );
};
