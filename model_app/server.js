const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors())
const PORT = process.env.PORT || 3002

let data = []
app.route('/simulator/okc')
    .get((req, res) => {
        res.json(data);
    })
    .post((req, res) => {
        data.push(req.body)
        res.json({ message: 'communication established!' });
    });


// Start the server
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});
