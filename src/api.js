
const API_KEY = 'Apikey 45ac4aadcca620a692a7148bcae113635abaf0b066d0f0595718c570c8f83af9'




export const loadTickers = (tickers) =>
  fetch(`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tickers.join(',')}`, {
  headers: {
    authorization: `Bearer ${API_KEY}`,
  }
})
    .then(res => res.json())
    .then(rawData =>
      Object.fromEntries(
        Object.entries(rawData).map(([key,value]) => [key,1 / value])
      )
    )