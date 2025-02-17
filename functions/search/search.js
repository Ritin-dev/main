// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.search || 'World'
    const json_data = require("../../build/search-index.json");
    const lunr = require("lunr");

    const idx = lunr.Index.load(json_data.index);
    const result = idx.search(subject);
    const out = [];

    result.forEach((val,i) => {
        if(i < 12){
            out.push({ score: val.score, title: json_data.store[val.ref].title, path: "/" + val.ref});
        }
    });



    return {
      statusCode: 200,
      body: JSON.stringify(out),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
