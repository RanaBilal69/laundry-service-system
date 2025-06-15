const express = require("express");
const mongoose = require("mongoose");  
const cors = require("cors");   

const UsersModel = require("./models/Users");  
const AccountsModel = require("./models/Accounts");  
const OrdersModel = require("./models/Orders");  
const StatusModel = require("./models/Status");  
const FeedbackModel = require("./models/Feedback");  
const app = express();
app.use(express.json());  
app.use(cors()); 

mongoose.connect("mongodb://localhost:27017/Laundry");
app.post("/", (req, res) => {
  res.send("UrbanClean"); 
});

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
      UsersModel.create({ name, email, password })
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UsersModel.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful'});
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get("/home", (req, res) => {
  console.log("welcome");  
  res.send("Welcome To UrbanClean"); 
});

app.post("/servicereq", (req, res) => {
  const { name, address, type, weight, date, num } = req.body;
      OrdersModel.create({ name, address, type, weight, date, num })
});

app.post("/trackorder", async (req, res) => {
  const { number } = req.body;
  try {
        const x = await StatusModel.findOne({ number });
        if (!x) {
            return res.status(404).send("User Not Found");
        }
        console.log(`Order ID: ${x.id}`); 
        console.log(`Order Status: ${x.status}`); 
        console.log(`Delivery Date: ${x.delivery}`); 
        // res.send(`Balance for ${accnum} is ₹${a.amount}`);
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    } 
});

app.post("/payment", async (req, res) => {
  const { id , amount } = req.body;
  try {
  const parsedAmount = parseFloat(amount);
  const result = await AccountsModel.updateOne(
    { id: id }, 
    { $inc: { amount: -parsedAmount } }
  );
  res.status(200).json({ message: "Withdrawal successful" });
   } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
});

app.post("/feedback", (req, res) => {
  const { name, feedback } = req.body;
     FeedbackModel.create({ name, feedback })
});

/*app.post("/checkbalance", async (req, res) => {
  const { accnum } = req.body;
  try {
        const a = await AccountsModel.findOne({ accnum });
        if (!a) {
            return res.status(404).send("User Not Found");
        }
        console.log(`Balance for ${accnum}: ${a.amount}`); 
        res.send(`Balance for ${accnum} is ₹${a.amount}`);
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    } 
});

app.post("/info", (req, res) => {
  const { name, accnum, amount } = req.body;
      AccountsModel.create({ name, accnum, amount })
});*/

const PORT = 5000;
app.listen (PORT , () => {
    console.log(`UrbanClean Is Running At Port ${PORT}`);
});






