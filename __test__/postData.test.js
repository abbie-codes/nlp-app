import { postData } from '../src/client/js/postData';
describe("Testing the postData function", () => {
    test("Testing the postData() function", () => {
        expect(postData).toBeDefined();
    })
  
});

describe("Testing the postData function", () => {
  test('postData resolves rather than rejects', async () => {
  await expect(postData()).resolves;
});
});
