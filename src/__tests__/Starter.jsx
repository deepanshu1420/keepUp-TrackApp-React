import '@testing-library/jest-dom';
import Starter from '../Components/Starter';
import {screen , render} from '@testing-library/react';
describe('Warning Component' , ()=>{
    test('emoji rendering' , ()=>{
        render(<Starter/>);
        const mainEmoji = screen.getByRole("heading" , {level : 2});
        expect(mainEmoji).toBeInTheDocument();

        const subHeadingn = screen.getByRole("heading" , {level : 3});
        expect(subHeadingn).toBeInTheDocument();
        
    });
});
