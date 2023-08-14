import {React } from "react";
import { Botao, Box } from "../UI"
import { extratoLista } from "../../info";
import Itens from "../Itens";


const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(({ id, type, date, from, value }) => {
                return (
                    <Itens key={id} type={type} date={date} from={from} value={value}>
                    </Itens>
                )
            })}
            <Botao>Ver Mais</Botao>
        </Box>
    )
}

export default Extrato; 