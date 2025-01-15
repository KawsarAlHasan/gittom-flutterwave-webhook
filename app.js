const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
require("dotenv").config();

const app = express();

// Initialize Firebase Admin with Service Account credentials
const serviceAccount = require("./glucoi-c09b2-firebase-adminsdk-uhnsy-e44b43e94c.json"); // Replace with your service account key file path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // No need to specify databaseURL for Firestore
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const SECRET_KEY = process.env.SECRET_KEY;

app.post("/webhook", async (req, res) => {
  const signature = req.headers["verif-hash"];
  if (!signature || signature !== SECRET_KEY) {
    console.error("Invalid signature");
    return res.status(401).send("Unauthorized");
  }

  // Handle the webhook event here
  const payload = req.body;
  if (payload["data"]["status"] == "successful") {
    const grossAmount = req.body["data"]["amount"];
    const feePercentage = 1.4 + 0.105; // Example: 2.5% fee (adjust as necessary)
    const flatFee = 0.0; // Example: flat fee (adjust as necessary)

    const percentageFee = grossAmount * (feePercentage / 100);
    const totalFee = percentageFee + flatFee;
    const netAmount = grossAmount - totalFee;

    console.log("User netAmount:", netAmount);
    //const customerEmail = req.body["data"]["customer"]["email"];
    const customerEmail = "nayon.coders@gmail.com";

    console.log("User not found with email:", customerEmail);

    // Look up user by email in Firestore
    const userRef = admin.firestore().collection("users").doc(customerEmail); // Assuming email is the document ID
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      console.log("User not found with email:", customerEmail);
      return res.status(404).send("User not found");
    }

    // Update the user's balance in Firestore
    const oldBalance = parseFloat(userDoc.data().balance);
    console.log("User oldBalance:", oldBalance);
    await userRef.update({
      balance: oldBalance + netAmount,
    });

    // Respond to the webhook with success
    return res.status(200).send({ message: "User payment is success" });
  }

  res.status(200).json({ message: "Webhook received successfully" });
});

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});

app.get("/", (req, res) => {
  res.send("Server is running");
});
