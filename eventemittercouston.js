const EventEmitter = require('events');

// Create a custom event emitter
const customEmitter = new EventEmitter();

// Define a custom event and its handler
customEmitter.on('myCustomEvent', (data) => {
  console.log('Custom event received with data:', data.mes);
});

// Emit the custom event with data
customEmitter.emit('myCustomEvent', { mes: 'Hello from custom event!' });