const express = require('express');

const app = express();

const PORT = 8081;

const request = require('request');

app.use(express.static('./dist/employee'));

app.get('/employee', (req, res) => {
    request.get('http://localhost:8089/employee?name='+req.query.name, (error, response) => {
        if (error) {
            res.send(error);
          } else {
            res
              .header('')
              .status(response.statusCode)
              .json(JSON.parse(response.body));
          } 
    });
});

app.listen(PORT, () => {
    console.log(`Listening on : ${PORT}`);
})
