import '@testing-library/jest-dom';
import Card from '../Components/Card';
import {screen , render} from '@testing-library/react';
const bag = [
    {title : "parth",desc : "Hello world from parth bro ...."},
    {title : "parth kapoor",desc : "Hello world 2023 ...."}
];
describe.only("Card" , ()=>{
    test("cardDataFlow" , ()=>{
        render(<Card/>);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();

        
    })
});