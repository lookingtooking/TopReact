import React, { useState } from 'react'
import './index.css'


function App() {

  const [inputTask, setInputTask] = useState();
  const [tasks, setTasks] = useState([]);

  const onCheckboxClick = (idx) => {
    tasks[idx].currentState=!tasks[idx].currentState
    setTasks([...tasks])
  }

  const onClickSaveBtn = () => {
    setTasks([...tasks, { title: inputTask, currentState: false }])
    setInputTask('')
  }

  const onClickDeleteBtn = () => {
    setTasks([])
    
  }

  return (
    <>
    <div className='wrapper'>
      <input id='input-task' type='text' onInput={(e) => setInputTask(e.target.value)} value={inputTask}/>
      <div className='wrapperBtn'>
        <button id='btnSave' onClick={onClickSaveBtn}>Создать</button>
        <button id='btnDel' onClick={onClickDeleteBtn}>Удалить всё</button>
      </div>
    </div>
    <ul>
            {
              tasks.map((item, idx) => <li className={`listItem ${item.currentState ? 'done' : ''}`} key={item.title}>
              <input id='checkbox1' type='checkbox' onClick={(e) => onCheckboxClick(idx)}/>{item.title}</li>)
            }
    </ul>
    </>
  )
}

export default App;