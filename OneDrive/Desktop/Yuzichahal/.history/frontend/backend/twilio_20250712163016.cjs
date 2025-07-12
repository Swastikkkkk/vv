
// // // const express = require("express");
// // // const twilio = require("twilio");
// // // const axios = require("axios");
// // // require("dotenv").config();

// // // const app = express();
// // // app.use(express.urlencoded({ extended: true }));
// // // app.use(express.json());

// // // const { TWILIO_SID, TWILIO_AUTH_TOKEN, VAPI_API_KEY, ASSISTANT_ID } =
// // //   process.env;
// // // const VoiceResponse = twilio.twiml.VoiceResponse;

// // // app.post("/twilio/voice", (req, res) => {
// // //   const resp = new VoiceResponse();

// // //   resp.say("Hello! Connecting you to your AI now. Please hold.", {
// // //     voice: "alice",
// // //   });

// // //   resp.connect().stream({
// // //     url: `wss://api.vapi.ai/v2/stream?assistantId=${ASSISTANT_ID}&apikey=${VAPI_API_KEY}`,
// // //   });

// // //   res.type("text/xml");
// // //   res.send(resp.toString());
// // // });

// // // app.post("/api/call", async (req, res) => {
// // //   const { to } = req.body;
// // //   try {
// // //     const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);
// // //     const call = await client.calls.create({
// // //       to,
// // //       from: process.env.TWILIO_PHONE,
// // //       url: `${process.env.PUBLIC_URL}/twilio/voice`,
// // //       method: "POST",
// // //     });
// // //     res.json({ success: true, callSid: call.sid });
// // //   } catch (e) {
// // //     res.status(500).json({ success: false, error: e.message });
// // //   }
// // // });

// // // app.listen(5800, () => console.log("🚀 Server running on port 5800"));
// // const express = require("express");
// // const cors = require("cors"); // ← import CORS
// // const twilio = require("twilio");
// // const axios = require("axios");
// // require("dotenv").config();

// // const app = express();

// // // ✅ Allow cross-origin requests
// // app.use(cors({
// //   origin: "http://localhost:5173", // frontend origin
// //   methods: ["POST", "GET"],
// //   credentials: true
// // }));

// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());

// // const { TWILIO_SID, TWILIO_AUTH_TOKEN, VAPI_API_KEY, ASSISTANT_ID } = process.env;
// // const VoiceResponse = twilio.twiml.VoiceResponse;

// // app.post("/twilio/voice", (req, res) => {
// //   const resp = new VoiceResponse();

// //   resp.say("Hello! Connecting you to your AI now. Please hold.", {
// //     voice: "alice",
// //   });

// //   resp.connect().stream({
// //     url: `wss://api.vapi.ai/v2/stream?assistantId=${ASSISTANT_ID}&apikey=${VAPI_API_KEY}`,
// //   });

// //   res.type("text/xml");
// //   res.send(resp.toString());
// // });

// // app.post("/api/call", async (req, res) => {
// //   const { to } = req.body;
// //   try {
// //     const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);
// //     const call = await client.calls.create({
// //       to,
// //       from: process.env.TWILIO_PHONE,
// //       url: `${process.env.PUBLIC_URL}/twilio/voice`,
// //       method: "POST",
// //     });
// //     res.json({ success: true, callSid: call.sid });
// //   } catch (e) {
// //     res.status(500).json({ success: false, error: e.message });
// //   }
// // });
// // app.post("/api/call", async (req, res) => {
// //   const { to } = req.body;
// //   try {
// //     const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);
// //     const call = await client.calls.create({
// //       to,
// //       from: process.env.TWILIO_PHONE,
// //       url: `${process.env.PUBLIC_URL}/twilio/voice`, // This must be valid and reachable by Twilio
// //       method: "POST",
// //     });
// //     res.json({ success: true, callSid: call.sid });
// //   } catch (e) {
// //     console.error("🔥 CALL ERROR:", e);  // ADD THIS LINE
// //     res.status(500).json({ success: false, error: e.message });
// //   }
// // });


// // app.listen(5800, () => console.log("🚀 Server running on port 5800"));
// const express = require("express");
// const cors = require("cors");
// const twilio = require("twilio");
// require("dotenv").config();

// const app = express();

// app.use(cors({
//   origin: "http://localhost:5173", // your React frontend origin
//   methods: ["GET", "POST"],
//   credentials: true
// }));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const {
//   TWILIO_SID,
//   TWILIO_AUTH_TOKEN,
//   TWILIO_PHONE,
//   YOUR_PHONE,
//   VAPI_API_KEY,
//   ASSISTANT_ID,
//   PUBLIC_URL // Ensure this is set in your .env
// } = process.env;

// const VoiceResponse = twilio.twiml.VoiceResponse;

// // 🔊 Handles the voice response Twilio calls
// app.post("/twilio/voice", (req, res) => {
//   const resp = new VoiceResponse();

//   resp.say("Hello! Connecting you to your AI now. Please hold.", {
//     voice: "alice",
//   });

//   resp.connect().stream({
//     url: `wss://api.vapi.ai/v2/stream?assistantId=${ASSISTANT_ID}&apikey=${VAPI_API_KEY}`,
//   });

//   res.type("text/xml");
//   res.send(resp.toString());
// });

// // 📞 Initiates the call
// app.post("/api/call", async (req, res) => {
//   const { to } = req.body;

//   try {
//     const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);
    
//     const call = await client.calls.create({
//       to: to || YOUR_PHONE, // fallback to default if not provided
//       from: TWILIO_PHONE,
//       url: `${PUBLIC_URL}/twilio/voice`, // must be public for Twilio to access
//       method: "POST"
//     });

//     res.json({ success: true, callSid: call.sid });
//   } catch (e) {
//     console.error("🔥 CALL ERROR:", e);
//     res.status(500).json({ success: false, error: e.message });
//   }
// });

// app.listen(5800, () => console.log("🚀 Server running on port 5800"));
