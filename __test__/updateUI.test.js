import { updateUI } from '../src/client/js/updateUI';
describe("Testing the updateUI function", () => {
    test("Testing the updateUI() function is defined", () => {
        expect(updateUI).toBeDefined();
    })

    test("Testing that results section displays as block if not undefined", () => {
        let body = {};
        let results = document.querySelector('.results');
        if (body.agreement !== undefined){
            expect(results.style.display = 'block');
        }
    })
});



    