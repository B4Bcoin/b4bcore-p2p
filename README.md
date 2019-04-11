b4bcore P2P
=======

`b4bcore-p2p` adds [b4bcoin protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for b4bcore.

See [the main b4bcore repo](https://github.com/B4Bcoin/b4bcore) for more information.

## Getting Started

```sh
npm install b4bcore-p2p
```
In order to connect to the B4Bcoin network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('b4bcore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [bitcore guide](http://bitcore.io/guide/peer.html) on the usage of the `Peer` class.


## License

Code released under [the MIT license](https://github.com/B4Bcoin/b4bcore/blob/master/LICENSE).
