import { PasseioDestaque, CardPasseio, Titulo, Local, Descricao } from "./Style"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";

const PasseiosDestaque= (props) => {

  const { t } = useTranslation();

  const [ShowText, setShowText]= useState(false)

 /* const handleClick = () => {
    navigate(`/passeios/${props.passeioId}`);
  };*/

  const url = `/#/passeios/${props.passeioId}`;

  return(
      <PasseioDestaque
        onMouseOver={() => setShowText(true)}
        onMouseLeave={() =>setShowText(false)}
        >
        <CardPasseio >
            {props.passeioId}
                <Titulo
                mostrar={ShowText? ShowText.toString(): undefined}
                >
                  {props.titulo}</Titulo>
                <img src={props.imagem} />
        </CardPasseio>
        <section className="text">
          <Local mostrar={ShowText? ShowText.toString(): undefined}>{props.local}</Local>
          <Descricao mostrar={ShowText? ShowText.toString(): undefined}>{props.descricao}</Descricao>
        </section>
      </PasseioDestaque>
  )
}

export default PasseiosDestaque;
