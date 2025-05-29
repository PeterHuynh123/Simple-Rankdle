const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const fs = require('node:fs/promises');

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hi this is the server for Rankdle');
});

app.get('/api/videos', async (req, res) => {
    const data = await fs.readFile('./videos.json', { encoding: 'utf8' });
    const videos = JSON.parse(data);
    res.status(200).json(videos);
});

app.post('/api/submit-video', async (req, res) => {
    console.log(req.body)

    const readData = await fs.readFile('./videos.json', { encoding: 'utf8' });
    const videos = JSON.parse(readData);

    videos.push(req.body)

    const writeData = JSON.stringify(videos, null, 4);



    await fs.writeFile('./videos.json', writeData)
    res.send('ok')
})

app.listen(PORT, (err) => {
    console.log(`server running at http://localhost:${PORT}`);
});

