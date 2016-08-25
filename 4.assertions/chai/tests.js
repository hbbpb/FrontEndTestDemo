var expect = chai.expect;
var assert = chai.assert;
chai.should();


describe('加法函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        //expect style
        expect(add(1, 1)).to.be.equal(2);
    });

    it('任何数加0等于自身', function () {
        //assert style
        assert.equal(add(1, 0), 1);

        //should style
        add(0, 0).should.be.equal(0);
    });
});
