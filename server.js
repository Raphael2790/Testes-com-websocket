const express = require ('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
  res.render('index.html');
});

io.on('connection', socket => {
  console.log(socket.id)

  socket.on('message', data => {
    console.log(data);
  })
})

app.listen(3000)