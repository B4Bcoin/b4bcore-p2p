# Peer-to-Peer
The `b4bcore-p2p` module provides peer-to-peer networking capabilities for [b4bcore](https://github.com/B4Bcoin/b4bcore), and includes [Peer](peer.md) and [Pool](pool.md) classes. A [Message](messages.md) class is also exposed, in addition to [several types of messages](messages.md). Pool will maintain connection to several peers, Peers represents a node in the b4bcoin network, and Message represents data sent to and from a Peer. For detailed technical information about the b4bcoin protocol, please visit the [Protocol Specification](https://en.bitcoin.it/wiki/Protocol_specification) on the Bitcoin Wiki.

## Installation
Peer-to-peer is implemented as a separate module.

For node projects:

```bash
npm install b4bcore-p2p --save
```

## Quick Start

```javascript
var Peer = require('b4bcore-p2p').Peer;
var peer = new Peer({host: '5.9.85.34'});

// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});

peer.connect();
```
