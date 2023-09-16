import { DivStyledFooter } from "./styled";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import pay from "../../assets/formas_pagamento.png";
import logoFooter from "../../assets/footerLogo.png";
export const Footer = () => {
  return (
    <DivStyledFooter>
      <div className="column">
        <div className="flex">
          <div className="sobre">
            <span className="span-top">Sobre nós</span>
            <span className="span-1">CONHEÇA</span>
            <span className="span-2">COMO COMPRAR</span>
            <span className="span-3">INDICAÇÃO E DESCONTO</span>
            <div className="social">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={youtube} alt="youtube" />
            </div>
          </div>
          <div className="info">
            <span className="span-top">INFORMAÇÕES ÚTEIS</span>
            <span>FALE CONOSCO</span>
            <span>DÚVIDAS</span>
            <span>PRAZOS DE ENTREGA</span>
            <span>FORMAS DE PAGAMENTO</span>
            <span>POLÍTICA DE PRIVACIDADE</span>
            <span>TROCAS E DEVOLUÇÕES</span>
          </div>
          <div className="pay">
            <span className="span-top">FORMAS DE PAGAMENTO</span>
            <img src={pay} alt="formas de pagamento" />
          </div>
        </div>
        <div className="form">
          <h4 className="h4-1">CADASTRE-SE E RECEBA NOSSAS</h4>
          <h4 className="h4-2">NOVIDADES E PROMOÇÕES</h4>
          <span>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </span>
          <div className="div-input">
            <input />
            <button>OK</button>
          </div>
        </div>
      </div>
      <div className="end">
        <div>
          <span>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos. É vedada
            a reprodução, total ou parcial, de qualquer conteúdo sem expressa
            autorização.
          </span>
          <img src={logoFooter} alt="logo footer" />
        </div>
      </div>
    </DivStyledFooter>
  );
};
