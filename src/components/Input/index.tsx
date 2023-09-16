import React, { useState } from "react";
import { InputStyled } from "./styled";
import olhoFechado from "../../assets/close-eye.png";

export const Input = ({
  label,
  type,
  placeholder,
  register,
  msgerror,
  img,
  state,
  setType,
}: any) => {
  const [formattedValue, setFormattedValue] = useState("");

  const formatCPF = (value: any) => {
    value = value.replace(/\D/g, ""); // Remove tudo exceto dígitos

    if (value.length <= 3) {
      setFormattedValue(value);
    } else if (value.length <= 6) {
      setFormattedValue(`${value.slice(0, 3)}.${value.slice(3)}`);
    } else if (value.length <= 9) {
      setFormattedValue(
        `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`
      );
    } else {
      setFormattedValue(
        `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(
          6,
          9
        )}-${value.slice(9, 11)}`
      );
    }

    // Update the registered input value with the unformatted value
    register && register.onChange && register.onChange(value);
  };

  const newType = () => {
    if (state === "password") {
      setType("text");
    } else if (state === "text") {
      setType("password");
    }
  };

  const [value, setValue] = useState("0.00");

  const handleChange = (event: any) => {
    const newValue = event;

    // Verifica se o novo valor é um número válido
    if (!isNaN(newValue)) {
      // Remove os zeros à esquerda e converte para número
      const numericValue = parseFloat(newValue);

      // Formata o valor com duas casas decimais
      const formattedValue = numericValue.toFixed(2);

      // Atualiza o estado com o novo valor formatado
      setValue(formattedValue);
    }
    console.log(value);
  };

  return (
    <InputStyled>
      {img && state === "password" && (
        <img src={img} alt="olho" onClick={() => newType()} />
      )}
      {img && state === "text" && (
        <img src={olhoFechado} alt="olho" onClick={() => newType()} />
      )}
      <label>{label}</label>
      {label === "CPF" ? (
        <input
          type="text"
          autocomplete="off"
          maxlength="14"
          placeholder={placeholder}
          {...register}
          value={formattedValue}
          onChange={(e) => formatCPF(e.target.value)}
        />
      ) : (
        // ) : label === "Valor" ? (
        //   <input
        //     type={type}
        //     placeholder={placeholder}
        //     {...register}
        //     onChange={(e) => handleChange(e.target.value)}
        //   />
        <>
          <input type={type} placeholder={placeholder} {...register} />
        </>
      )}
      <span className="info">{msgerror}</span>
    </InputStyled>
  );
};
