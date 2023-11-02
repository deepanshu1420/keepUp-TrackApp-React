import '@testing-library/jest-dom';
import {screen , render} from '@testing-library/react';
import Input from '../Components/Input';
describe("Input" , ()=>{
    test("inputCard" , ()=>{
        render(<Input/>);
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();

        // This one is yet not shown due to false state in props 
        // const textBox = screen.getByRole("textbox" , {name : "👉 now elaborate your task .."});
        // expect(textBox).toBeInTheDocument();
    })
})