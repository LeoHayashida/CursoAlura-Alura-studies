import { ITarefa } from "../../types/tarefa";
import Item from "./Item";

import style from "./Lista.module.scss";

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props ) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudo do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
          selecionaTarefa= {selecionaTarefa}
            key={item.id}
            tarefa={item.tarefa}
            tempo={item.tempo}
            // {...item} essa linha única substitui todas as outras linhas de props
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
