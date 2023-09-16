import { DivStyledCategory } from "./styled";
import tecnologia from "../../assets/monitor.png";
import tecnologiaPink from "../../assets/monitor-pink.png";
import supermercado from "../../assets/supermercados.png";
import supermercadoPink from "../../assets/supermercados-pink.png";
import whiskey from "../../assets/whiskey.png";
import whiskeyPink from "../../assets/whiskey-pink.png";
import moda from "../../assets/moda.png";
import modaPink from "../../assets/moda-pink.png";
import ferramentas from "../../assets/ferramentas.png";
import ferramentasPink from "../../assets/ferramentas-pink.png";
import esteira from "../../assets/esteira.png";
import esteiraPink from "../../assets/esteira-pink.png";
import saude from "../../assets/saude.png";
import saudePink from "../../assets/saude-pink.png";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";

export const Category = () => {
  const { setSearch } = useContext(Context);
  const [imageSecund, setImage] = useState(tecnologia);

  const focus = (e: string, image: HTMLElement): void => {
    const elementoComFocus: any = document.querySelector(".focus");

    if (elementoComFocus !== null) {
      elementoComFocus.src = imageSecund;
      elementoComFocus.classList.remove("focus");
    }
    const elemento: any = document.querySelector("." + e);
    if (elemento !== null) {
      elemento.classList.add("focus");
      setImage(elemento.src);
      elemento.src = image;
    }
  };

  useEffect(() => {
    // focus("tecnologia", tecnologiaPink);
  }, []);

  return (
    <DivStyledCategory>
      <div
        className="test"
        onClick={() => focus("tecnologia", tecnologiaPink)}
        tabIndex={0}
      >
        <img
          src={tecnologia}
          alt=""
          className="tecnologia"
          onClick={() => setSearch("Tecnologia")}
        />
        <h5>Tecnologia</h5>
      </div>
      <div onClick={() => focus("superMercado", supermercadoPink)} tabIndex={0}>
        <img
          src={supermercado}
          alt=""
          className="superMercado"
          onClick={() => setSearch("Alimenticio")}
        />
        <h5>Supermercado</h5>
      </div>
      <div onClick={() => focus("whiskey", whiskeyPink)} tabIndex={0}>
        <img
          src={whiskey}
          alt=""
          className="whiskey"
          onClick={() => setSearch("Bebidas")}
        />
        <h5>Bebidas</h5>
      </div>
      <div onClick={() => focus("ferramentas", ferramentasPink)} tabIndex={0}>
        <img
          src={ferramentas}
          alt=""
          className="ferramentas"
          onClick={() => setSearch("Ferramentas")}
        />
        <h5>Ferramentas</h5>
      </div>
      <div onClick={() => focus("saude", saudePink)} tabIndex={0}>
        <img
          src={saude}
          alt=""
          className="saúde"
          onClick={() => setSearch("Saúde")}
        />
        <h5>Saúde</h5>
      </div>
      <div onClick={() => focus("esteira", esteiraPink)} tabIndex={0}>
        <img
          src={esteira}
          alt=""
          className="esteira"
          onClick={() => setSearch("Esportes")}
        />
        <h5>Esportes e Fitness</h5>
      </div>
      <div onClick={() => focus("moda", modaPink)} tabIndex={0}>
        <img
          src={moda}
          alt=""
          className="moda"
          onClick={() => setSearch("Moda")}
        />
        <h5>Moda</h5>
      </div>
    </DivStyledCategory>
  );
};
