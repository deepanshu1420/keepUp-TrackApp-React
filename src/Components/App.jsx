import '../index.css';
import Header from './Header';
import Input from './Input';
import Card from './Card';
import { useState } from 'react';
import Starter from './Starter';
function App(){
    const [bag , updateBag] = useState([]);
    const [show , updateShow] = useState(true);
    function add(obj){
        updateBag([...bag , obj]);
        updateShow(false);
    }
    function remove(oid){
        updateBag((prev)=>{
            return prev.filter((obj , id)=>{
                    return id !== oid;
            })
        })

        if(bag.length === 1){
            updateShow(true);
        }
    }
    
    return(
        <>
            {
                show ? <Starter/> : ""
            }

            <Header/>
            <hr/>
            <Input
                func = {add}
            />

            <div data-testid = "father" className="father container">
                {
                    bag.map((obj , id)=>{
                        return <Card 
                                    key={id} 
                                    title = {obj.title}
                                    desc = {obj.desc}
                                    oid = {id}
                                    func = {remove}
                                    />
                    })
                }
            </div>
            
        </>
    );
}
export default App;