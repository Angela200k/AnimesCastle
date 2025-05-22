const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔑 Coloque sua chave da OpenAI aqui
const configuration = new Configuration({
  apiKey: "sk-...tbYA"
});
const openai = new OpenAIApi(configuration);

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }]
    });

    const reply = completion.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("Erro:", error.message);
    res.status(500).json({ reply: "Desculpe, houve um erro no servidor." });
  }
});

app.listen(3000, () => {
  console.log("🤖 Servidor rodando em http://localhost:3000");
});