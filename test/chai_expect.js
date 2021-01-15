var expect    = require("chai").expect;
var from = require("../app/testfunct");
describe("From tests using EXPECT interface from CHAI module: ", function() {
describe("Check addTested Function: ", function() {
it("Check the returned value using: expect(value).to.equal('value'): ", function() {
result   = from.addTested("meiguo");
expect(result).to.equal("meiguo ren");
});
it("Check the returned value using: expect(value).to.be.a('value')): ", function() {
result   = from.addTested("meiguo");
expect(result).to.be.a('string');
});
it("Check the returned value using: expect(value).to.have.lengthOf(value): ", function() {
result   = from.addTested("meiguo");
expect(result).to.have.lengthOf(10);
});
});
});