const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

// event signal that tells something is happend with our app

// eventemitter object have on method used for registering the event it's callback invoked when this event is emitted

// myEmitter.on('eventName',(data)=>{
//     console.log(data);
// })


// it emmit the event
// myEmitter.emit('eventName',"Event is emmited")
// myEmitter.emit('eventName',"Event is emmited 2")
// myEmitter.emit('eventName',"Event is emmited 3")


// call event once only no matter how many time it is emitted
myEmitter.once('eventName',(data)=>{
    console.log(data);
})

myEmitter.once('click',(data)=>{
    console.log(data);
})

// myEmitter.emit('eventName',"Event is emmited")
// myEmitter.emit('click',"click is emmited 2")
// myEmitter.emit('eventName',"Event is emmited 3")


class Logger extends EventEmitter{

    log(data){
        this.emit('message',data)
    }

}

const loggerObj =  new Logger()

// event attahed to logger instance
loggerObj.on('message',(data)=>{
    console.log(data)
})

module.exports = loggerObj