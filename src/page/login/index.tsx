import { DivStyled } from "../login/styled";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import olho from "../../assets/eye.png";
import { api } from "../../service";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../context/context";
import logo from "../../assets/logo.png";

export const PageLogin = () => {
  // const loginSchema = yup.object().shape({
  //   email: yup
  //     .string()
  //     .required("Email obrigatório")
  //     .email("Email inválido")
  //     .min(6, "Mínimo 6 caracteres")
  //     .max(60, "Máximo 60 caracteres"),
  //   password: yup
  //     .string()
  //     .required("Senha obrigatória")
  //     .min(6, "Minimo 6 caracteres")
  //     .max(60, "Máximo 60 caracteres"),
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const { setDataUser } = useContext(Context);
  const [type, setType] = useState("password");
  const DataForm = async (data: any) => {
    console.log(data);

    const test = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await api.post("auth/login", test);
      setDataUser(response.data.user);
      localStorage.setItem("@Token", response.data.token);
      localStorage.setItem("@Id", response.data.user.id);
      toast.success("Login Concluído 😎");

      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    } catch {
      if (data.email == "vtex@gmail.com" && data.password == 123456) {
        return toast.success("Lcuas");
      }
      toast.error("Email ou senha incorreto");
    }
  };

  return (
    <DivStyled>
      <div className="full-div">
        <div>
          <img src={logo} alt="Logo" className="logo" />
          <div className="div-form">
            <h1>Já Tem cadastro?</h1>
            <h5>Faça o login na sua conta abaixo:</h5>
            <form onSubmit={handleSubmit(DataForm)}>
              <Input
                label="Email"
                type="text"
                placeholder="Digite seu email aqui"
                register={register("email")}
                msgerror={errors.email?.message}
              />
              <Input
                label="Senha"
                type={type}
                placeholder="Digite sua senha aqui"
                register={register("password")}
                msgerror={errors.password?.message}
                img={olho}
                state={type}
                setType={setType}
              />
              <button className="button" type="submit">
                Continuar
              </button>
              <span className="alert" onClick={() => navigate("/register")}>
                Novo por aqui? Cadastre-se
              </span>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </DivStyled>
  );
};
