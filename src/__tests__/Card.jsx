import '@testing-library/jest-dom';
import Card from '../Components/Card';
import {screen , render} from '@testing-library/react';
const bag = [
    {title : "Deepanshu",desc : "Hello world from Deepanshu bro ...."},
    {title : "Deepanshu Sharma",desc : "Hello world 2023 ...."}
];
describe.only("Card" , ()=>{
    test("cardDataFlow" , ()=>{
        render(<Card/>);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();

        
    })
});