import React, { useState, useEffect, useMemo } from 'react';
import './style.css';

function App(){

  const [tarefas, setTarefas] = useState([

  ]);

  const[input, setInput] = useState('');

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa(){
    setTarefas([...tarefas, input]);
    setInput('');
  }
  
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return(
    <div className='container'>
      <div className='tarefa'>
      <ul>
        {tarefas.map(tarefa => (
          <li className='li' key={tarefa}>{tarefa}</li>
        ))}
      </ul> 

      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type="button" className='btn' onClick={adicionarTarefa}>Adicionar</button>

      <br/>
      <strong>Você tem {totalTarefas} tarefas!</strong>
      <br/>

      </div>
    </div>
  );
}

export default App;