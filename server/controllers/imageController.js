const asyncHandler = require('express-async-handler')
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

class imageController {
  static generateImage = asyncHandler(async (req, res) => {
    const { prompt, size } = req.body;
    try {
      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: size,
      });
      const imageURL = response.data.data[0].url;
      res.status(200).json({ status: true, data: imageURL });
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      } else {
        console.log(err.message);
      }
    };
  });
};

module.exports = imageController;