'use strict';

var should = require('chai').should();
var P2P = require('../../');
var builder = P2P.Messages.builder;
var b4bcore = require('@B4Bcoin/b4bcore-lib');

describe('Messages Builder', function() {

  describe('@constructor', function() {

    it('should return commands based on default', function() {
      // instantiate
      var b = builder();
      should.exist(b);
    });

    it('should return commands with customizations', function() {
      // instantiate
      var b = builder({
        network: b4bcore.Networks.testnet,
        Block: b4bcore.Block,
        Transaction: b4bcore.Transaction
      });
      should.exist(b);
    });

  });

});
