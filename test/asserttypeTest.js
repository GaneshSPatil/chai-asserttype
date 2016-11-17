const chai = require('chai');
const asserttype = require('../asserttype.js');

chai.use(asserttype);
const expect = chai.expect;
const should = chai.should();

describe('asserttype', () => {

  describe('Number', () => {
    it('should be a function', () => {
      expect(expect(1).to.be.number).to.be.a('function');
    });

    it('should assert numbers', () => {
      expect(0).to.be.number();
      0.0.should.be.number();
    });

    it('should throw error when it fails to assert numbers', () => {
      expect(() => expect('foo').to.be.number()).to.throw(Error);
    });

    it('should be false when the actual value is not a number', () => {
      expect('foo').not.to.be.number();
      'foo'.should.not.be.number();
      expect([1, 2, 3]).not.to.be.number();
      [1, 2, 3].should.not.be.number();
    });
  });

  describe('String', () => {
    it('should be a function', () => {
      expect(expect('test').to.be.string).to.be.a('function');
    });

    it('should assert strings', () => {
      expect('foo').to.be.string();
      'foo'.should.be.string();
    });

    it('should throw error when it fails to assert strings', () => {
      expect(() => expect(1).to.be.string()).to.throw(Error);
    });

    it('should be false when the actual value is not a string', () => {
      expect(2).not.to.be.string();
      2.0.should.not.be.string();
      expect([1, 2, 3]).not.to.be.string();
      [1, 2, 3].should.not.be.string();
    });
  });

  describe('Boolean', () => {
    it('should be a function', () => {
      expect(expect(true).to.be.boolean).to.be.a('function');
    });

    it('should assert boolean values', () => {
      expect(true).to.be.boolean();
      false.should.be.boolean();
    });

    it('should throw error when it fails to assert boolean values', () => {
      expect(() => expect(1).to.be.boolean()).to.throw(Error);
    });

    it('should be false when the actual value is not a boolean', () => {
      expect(2).not.to.be.boolean();
      2.0.should.not.be.boolean();
      expect([1, 2, 3]).not.to.be.boolean();
      [1, 2, 3].should.not.be.boolean();
    });
  });

  describe('Object', () => {
    it('should be a function', () => {
      expect(expect({}).to.be.object).to.be.a('function');
    });

    it('should assert object values', () => {
      expect({}).to.be.object();
    });

    it('should throw error when it fails to assert object values', () => {
      expect(() => expect(1).to.be.object()).to.throw(Error);
    });

    it('should be false when the actual value is not a object', () => {
      expect(2).not.to.be.object();
      2.0.should.not.be.object();
      expect([1, 2, 3]).not.to.be.object();
      [1, 2, 3].should.not.be.object();
    });
  });
});