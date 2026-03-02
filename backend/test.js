const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

async function test() {
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: "AIzaSyAHymXmyO9RAXrsb9Bog5RqCJTsn73Z1Q0",
  });

  const res = await model.invoke("Say hello");
  console.log(res);
}

test();