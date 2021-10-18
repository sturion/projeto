import React from "react"
import ComParametro from "./ComParametro";
import ComFilhos from "./ComFilhos";
import Card from "./layout/Card";
import Repeticao from "./Repeticao";

export default () =>
<>

      <Repeticao></Repeticao>
    <Card titulo="Componente Com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="Componente Com Parametro">
      <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
    </Card>
</>

