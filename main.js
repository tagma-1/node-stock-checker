const https = require("https")
const readline = require("readline")

const baseUrl = "https://api.iextrading.com/1.0/"
const rl = readline.createInterface(process.stdin, process.stdout) 

const getStockPrice = (ticker) => {
  let url = baseUrl + `stock/${ticker}/book`
  console.log("Checking price...")
  https.get(url, res => {
    // set encoding and create empty string to append data chunks
    res.setEncoding("utf8")
    let body = ""
    // capture non-200 status codes
    if (res.statusCode !== 200) {
      console.log("Stock code not found.")
      return menu()
    }
    // add data chunk to the body
    res.on("data", data => {
      body += data
    })
    // parse the completed data and log result - return the menu
    res.on("end", () => {
      body = JSON.parse(body)
      console.log(
        `-----\n${body.quote.companyName}: $${body.quote.latestPrice}\n-----`
      )
      return menu()
    })
  })
}

const menu = () => {
  rl.question('To check a stock price, enter the code. To quit, press 1.\n', 
    (answer) => {
    if (answer === '1') { 
      console.log("Goodbye!")
      return rl.close()
    }
    else {
      getStockPrice(answer)
    }
  })
}

menu()