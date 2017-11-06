var EtherPortClient = require("etherport-client").EtherPortClient;

var board = new five.Board({
  port: new EtherPortClient({
    host: "192.168.4.1",  // IP ESP8266
    port: 3030
  }),
  timeout: 10000,
  repl: false
});

