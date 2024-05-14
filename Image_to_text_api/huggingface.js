import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;

const hf = new HfInference(HF_ACCESS_TOKEN);

let imgUrl = " ";
let imgData = await fetch(imgUrl).then(async (res) => {
  return await res.blob();
});

let result = await hf.imageToText({
  data: imgData,
  model: "nlpconnect/vit-gpt2-image-captioning",
});

console.log(result);
