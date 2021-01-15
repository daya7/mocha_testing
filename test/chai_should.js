var should    = require("chai").should();
var from = require("../app/testfunct");
describe("From tests using SHOULD interface from CHAI module: ", function() {
describe("Check addTested Function: ", function() {
it("Check the returned value using: value.should.equal(value): ", function() {
result   = from.addTested("meiguo");
result.should.equal("meiguo ren");
});
it("Check the returned value using: value.should.be.a('value'): ", function() {
result   = from.addTested("meiguo");
result.should.be.a('string');
});
it("Check the returned value using: expect(value).to.have.lengthOf(value): ", function() {
result   = from.addTested("meiguo");
result.should.have.lengthOf(10);
});
});
});