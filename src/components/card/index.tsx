import { useContext, useEffect } from "react";
import { DivStyledCard } from "./styled";
import { Context } from "../../context/context";
interface Root {
  descriptionShort: string;
  photo: string;
  price: number;
  productName: string;
}

export const Card = (element: any) => {
  const { dataModal, setDataModal, setOpenModal } = useContext(Context);
  console.log(dataModal);
  const numberString = element.price.toString();
  const lastNumber = numberString.slice(-2);
  const rest = numberString.slice(0, -2);

  const promo = Math.floor(element.price - (element.price * 6.6) / 100);
  const promoNumberString = promo.toString();
  const promoLastNumber = promoNumberString.slice(-2);
  const promoRest = promoNumberString.slice(0, -2);

  const credit = Math.floor(promo * 1.75);
  const creditNumberString = credit.toString();
  const creditLastNumber = creditNumberString.slice(-2);
  const creditRest = creditNumberString.slice(0, -2);

  const numberFloat = rest + "," + lastNumber;
  const promoNumberFloat = promoRest + "," + promoLastNumber;
  const creditNumberFloat = creditRest + "," + creditLastNumber;

  return (
    <DivStyledCard className={"list" + 0}>
      <img src={element.image} alt="foto" />
      <h5>{element.name}</h5>
      <div className="risk">
        <h4>R${promo + 5},00</h4>
      </div>
      <h1>R${rest + lastNumber}</h1>
      <h6>ou 2x de R${credit} sem juros</h6>
      <span>Frete grátis</span>
      <button
        onClick={() => {
          setOpenModal(true);
          setDataModal(element);
        }}
      >
        Comprar
      </button>
    </DivStyledCard>
  );
};
