import { Navigate } from "../../components/navigate";
import { DivTopHeader } from "../../components/divTopHeader";
import { Header } from "../../components/header";
import GlobalStyle from "../../style/globalStyled";
import { Background } from "../../components/background";
import { Category } from "../../components/category";
import { List } from "../../components/list";
import { Session } from "../../components/session";
import { Footer } from "../../components/footer";
import { CardModal } from "../../components/cardModal";
import { useContext, useEffect } from "react";
import { Context } from "../../context/context";
import { FocusCart } from "../../components/focusCart";
import { ToastContainer } from "react-toastify";

export const Profile = () => {
  const { openModal, focusCart, getDataUser, getCartUser } =
    useContext(Context);
  useEffect(() => {
    setTimeout(() => {
      getDataUser();
      getCartUser();
    }, 1000);
  }, []);
  return (
    <>
      <DivTopHeader />
      <Header />
      <Navigate />
      <Background />
      <Category />
      <List />
      <Session />
      <Footer />
      {openModal && <CardModal />}
      {focusCart && <FocusCart />}
      <ToastContainer autoClose={3000} />
    </>
  );
};
