import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg"
import ThemeOff from "../../assets/images/themeOff.svg"
import { Icone } from "../UI";

const Claro = <Icone src={ThemeOn} alt="Tema Claro" />
const Escuro = <Icone src={ThemeOff} alt="Tema Escuro" />

export default (({tema})=> (tema? Escuro :Claro))

