const Promise = require('bluebird');
console.log("Hello world");

const a = 1;
const b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}
test();
function test () {
  console.log("test");
}
test();

const arrow = () => {
  console.log("arrow");
}

arrow();

// HTTP module
const http = require('http');

const server = http.createServer();

server.listen(5000, () => {
  console.log("NodeJs server in running on port 5000");
})

// PATH module
const path = require('path');

// path.join()
let result = path.join(__dirname, './app.js');
console.log(result);

// path.basename()
result = path.basename(path.join(__dirname, './app.js'));
console.log(result);

result = path.basename(path.join(__dirname, './app.js'), '.js');
console.log(result);

// path.dirname()
result = path.dirname(path.join(__dirname, './app.js'));
console.log(result);

// FS module
const fs = require('fs');

const read = fs.readFileSync('READ.txt', 'utf8');
console.log(read);

fs.writeFileSync('write.txt', read);

fs.readFile('READ.txt', 'utf8', (err, data) => {
  console.log('I read the file');
  fs.writeFile('write3.txt', data, function(err) {
    if (err) {
      console.log(err);
    }
  })
});
console.log('Before reading the file');

const message = require('./message');
const adminData = require('./data');
const { person, animal } = require('./moredata');
const sayHi = require('./functions');
console.log(message);
console.log(adminData);
console.log(person);
console.log(animal);
sayHi('Hi from app.js');

const promise = new Promise((resolve, reject) => {
  resolve("Finished success");
  // reject("Error");
})
.then(value => {
  // throw new Error("'Wow it didn't work'")
  console.log(value);
  return value;
})
.then(value => {
  console.log(value);
})
.catch(err => {
  console.log(err);
});

new Promise((resolve, reject) => {
  fs.readFile('READ.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  })
})
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
})

const readFile = Promise.promisify(require('fs').readFile);

readFile('READ.txt', 'utf8').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});

Promise.delay(3000, 'Data resolved')
.then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})

// Generators

function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const generatorObject = simpleGenerator();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);