import '@testing-library/jest-dom';
import App from '../Components/App';
import {screen, render} from '@testing-library/react';
import Card from '../Components/Card';
const bag = [{title : "he" , desc : "love"} ,{"title" : "good",desc : "love"}];
describe("App renders correctly ..." ,()=>{
    test("Starter renders correctly" , ()=>{
        render(<App/>);
        const starterHeading = screen.getByRole('heading', {  name: /your todays to\-do tasks are yet not defined \.\.\./i});
        expect(starterHeading).toBeInTheDocument();
        
        const oneCard = screen.getByTestId("father");
        expect(oneCard).toBeInTheDocument();

        
        
    });


    

    
    
});