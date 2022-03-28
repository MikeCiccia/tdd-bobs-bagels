const BagelBasket = require("../src/basket.js");
describe("BagelBasket", () => {
  it("adds the bagel to the basket", () => {
    //setup
    const basket = new BagelBasket();
    const expectedresult = ["choccolate"];

    //execute
    const result = basket.addToBasket("choccolate");

    //verify
    expect(result).toEqual(expectedresult);
  });
});
it(" removes bagels,  and returns an empty basket", () => {
  // setup
  const bagel = new Bagel();
  // CHANGE: you want to add chocolate to the basket so that when you remove it, it gets removed!
  bagel.addToBasket("choccolate");
  const expectedresult = [];
  // execute
  const result = bagel.removeFromBasket("choccolate");
  // verify
  expect(result).toEqual(expectedresult);
});
