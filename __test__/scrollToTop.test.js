import { scrollToTop } from '../src/client/js/scroll';
describe("Testing the scrollToTop function is defined", () => {
    test("Testing the scrollToTop() function is defined", () => {
        expect(scrollToTop).toBeDefined();
    })
});

describe("Testing the scrollToTop function scrolls to top of page", () => {
    test("Testing the scrollToTop() function scrolls to top of page", () => {
        expect(document.body.scrollTop).toEqual(0);
    })
});