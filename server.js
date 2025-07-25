const express = require('express');
const cors = require('cors');
// const fetch = require('node-fetch');

const app = express();

app.use(cors());
app.use(express.json());


app.post("/api/swiggy-data", async (req, res)=>{
    // try {
        const swiggyResponse = await fetch('https://www.swiggy.com/dapi/restaurants/list/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body)
        });
    
        const data = await swiggyResponse.text();
        console.log(data);
        
        // res.json(data);

    // } catch (err) {
    //     res.status(500).json({ error: err });
    // }
});




app.listen(7000, ()=>{
    console.log("Proxy Server has started");
    
})
