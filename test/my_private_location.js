const MyPrivateLocation = artifacts.require("MyPrivateLocation");

const testData = {
  lat: "45.777144",
  long: "4.791939",
};

const testExpectedData = {
  lat: "45777144",
  long: "4791939",
};

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MyPrivateLocation", function (accounts) {
  it("test deployed", async function () {
    const instance = await MyPrivateLocation.deployed();

    return assert.isTrue(instance != null);
  });

  it("grant location and react to event", async function () {
    const instance = await MyPrivateLocation.deployed();

    const res = instance.grant(accounts[1], { from: accounts[0] })
    console.info(res)

  });

  it("grant location", async function () {
    const instance = await MyPrivateLocation.deployed();

    return assert.isTrue(
      instance.grant(accounts[1], { from: accounts[0] }) !== null
    );
  });
});
