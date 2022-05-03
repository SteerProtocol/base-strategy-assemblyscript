const myModule = require("../index");

describe("WASM Module", () => {
  describe("keltnerChannels", () => {
    it("config should show not implemented", async () => {
      try {
        myModule.BaseStrategy.config()
      } catch (e) {
        expect(e.message).toContain("Method not implemented.");
      }
    });
    it("execute should show not implemented", async () => {
      try {
        const strategy = myModule.BaseStrategy();
        strategy.execute()
      } catch (e) {
        expect(e.message).toContain("Method not implemented.");
      }
    });
  });
});
