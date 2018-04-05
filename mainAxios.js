const axios = require("axios")
const readline = require("readline")

const baseUrl = "https://api.iextrading.com/1.0/"
const rl = readline.createInterface(process.stdin, process.stdout) 

const getStockPrice = async (ticker) => {
  const url = baseUrl + `stock/${ticker}/book`
  console.log("Checking price...")
  try {
    const response = await axios.get(url)
    console.log(
      `-----\n${response.data.quote.companyName}: $${response.data.quote.latestPrice}\n-----`
    )
  } catch (error) {
    console.log("Stock code not found.")
  }
  return menu()
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