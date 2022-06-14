import { useState } from "react";

function AddCheckbox(props) {
    
    return <li><input type="checkbox" onChange={(e) => props.onChange(props.color)}/>{props.color}</li> 

  }


function App() {

    const [color,setColor] = useState([]) 
    const [colors, setColors] = useState([]) 
    const [inputColors, setInputColors] = useState()

    const onClickColors = () => {
        setColors ([...colors, {title: inputColors}])
    }
    
    const changeColor = (value) => {
        setColor(value)
    }
    
    const onClickDeleteBtn = () => {
        setColor([])
    }

    return (
    
        <div>
            <div style={{background:color}}> 
                <input type="text" onChange={(e) => setInputColors(e.target.value)} value={inputColors}></input>
                <button onClick={(e)=> onClickColors(e)}> Создать </button>
                <button onClick={(e)=> onClickDeleteBtn(e)}> Удалить </button>
                    <div>
                        <ul>
                            {
                                colors.map((item)=>  
                                   <AddCheckbox onChange={changeColor} color={item.title}/>)
                            }
                        </ul>
                    </div>
            </div>
        </div>
    );
}
export default App;