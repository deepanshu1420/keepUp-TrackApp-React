import { useState } from "react";
function Input({func}){
    const [bag , updateBag] = useState({title : "" , desc : ""});
    const [show , updateShow]= useState(false);
    function showFunc(){
        
        updateShow(true);
    }

    function trigger(e){
        const {name , value} = e.target;
        updateBag({...bag  , [name] : value});
    }
    function hideFunc(){
        updateShow(false);
    }
    function check(bag){
        for(let k in bag){
            if(!bag[k]) return false;
        }
        return true;
    }
    function submit(){
        if(check(bag)){

            func(bag);
            updateBag({title : "" , desc : ""});
            updateShow(false); 
        }else{
            alert("Kindly enter both the field .....");
        }
        
    }
    return(
        <>
            <div className="input-field container">
                <input 
                    type="text" 
                    placeholder="enter your task title ...."
                    className="fw-500 my-heading"
                    onClick = {showFunc}
                    onChange={trigger}
                    name="title"
                    value={bag.title}
                />
                {
                    show ? <>
                    <hr/>
                    <textarea 
                    placeholder="👉 now elaborate your task .."
                    onChange={trigger}
                    name="desc"
                    value={bag.desc}    
                    ></textarea> 
                    
                    <div className="icons">
                        <i className="fa-solid my-heading fa-plus"  style={{color : "#9b59b6"}} title="add me" onClick={submit}></i>
                        <i className="fa-solid my-heading fa-x cross"  style={{color : "red"}} title="remove" onClick={hideFunc}></i>
                    </div>
                    </>: ""
                }

                
            </div>
        </>
    );
}
export default Input;