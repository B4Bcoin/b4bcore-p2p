'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var b4bcore = require('@B4Bcoin/b4bcore-lib');
var BufferUtil = b4bcore.util.buffer;

/**
 * Request information about active peers
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function GetaddrMessage(arg, options) {
  Message.call(this, options);
  this.command = 'getaddr';
}
inherits(GetaddrMessage, Message);

GetaddrMessage.prototype.setPayload = function() {};

GetaddrMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = GetaddrMessage;
