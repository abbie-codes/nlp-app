import { handleSubmit} from '../src/client/js/formHandler'
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })

    test("Testing the url value", () => {
        const urlInput = document.getElementById('url');
        expect(urlInput).toEqual(document.getElementById('url'));
    })

});