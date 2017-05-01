const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
    const date = req.params[0].slice(1);
    const isUnix = {}.toString.call(date) === '[object Number]';
    const obj = Object.freeze({
        unix: isUnix ? date : Date.parse(date),
        natural: isUnix ? Math.floor(date / 1000) : date.replace(/%20/g, ' ')
    });

    res.send(JSON.stringify(obj));
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
