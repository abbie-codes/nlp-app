import { scrollFunction } from '../src/client/js/scroll';
describe("Testing the scroll function is defined", () => {
    test("Testing the scrollFunction() function is defined", () => {
        expect(scrollFunction).toBeDefined();
    })

    test("Testing that scroll button displays as block", () => {
        let scrollButton = document.getElementById("scrollToTop");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          expect(scrollButton.style.display).toBe("block");
        } 
    })
});
