import { useContext } from "react";
import { Context } from "../../context/context";
import { DivStyleCardModal } from "./styled";
import { api } from "../../service";
import { toast } from "react-toastify";

export const CardModal = () => {
  const { dataModal, number, setNumber, setOpenModal, getCartUser } =
    useContext(Context);

  const token = localStorage.getItem("@Token");
  const id = localStorage.getItem("@Id");
  const numberString = dataModal.price.toString();
  const lastNumber = numberString.slice(-2);
  const rest = numberString.slice(0, -2);
  const promo = Math.floor(dataModal.price - (dataModal.price * 6.6) / 100);
  const promoNumberString = promo.toString();
  const promoLastNumber = promoNumberString.slice(-2);
  const promoRest = promoNumberString.slice(0, -2);

  const promoNumberFloat = promoRest + "," + promoLastNumber;
  const reduce = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const addCard = async (item: any) => {
    try {
      for (let i = 0; i < number; i++) {
        await api.post("/users/cart", item, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        getCartUser();
      }

      toast.success("Item Adicionado no Carrinho");
    } catch (error: any) {
      console.log(error.response);
    }
    setNumber(1);
  };

  return (
    <DivStyleCardModal>
      <div className="white">
        <img src={dataModal.image} alt="foto" />
        <div className="column">
          <h2>{dataModal.name}</h2>
          <h3>R$ {rest + lastNumber}</h3>
          <span className="description">{dataModal.descriptionShort}</span>
          <span className="ancora">Veja mais detalhes do produto {">"}</span>
          <div className="input">
            <span onClick={() => reduce()}>-</span>
            <h3>{number}</h3>
            <span onClick={() => setNumber(number + 1)}>+</span>
          </div>
          <button
            onClick={() => {
              addCard(dataModal);
              setOpenModal(false);
            }}
          >
            Confirmar
          </button>
        </div>
        <span
          className="close"
          onClick={() => {
            setOpenModal(false);
            setNumber(1);
          }}
        >
          X
        </span>
      </div>
    </DivStyleCardModal>
  );
};
