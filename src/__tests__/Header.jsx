import '@testing-library/jest-dom';
import Header from '../Components/Header';
import {screen , render} from '@testing-library/react';
describe.only("Header" , ()=>{

    test("returns main heading" , ()=>{
        render(<Header/>);
        const mainHeading = screen.getByRole("heading");
        expect(mainHeading).toBeInTheDocument();

        const subHeading = screen.getByText("parth");
        expect(subHeading).toBeInTheDocument();
    } , 500);
});