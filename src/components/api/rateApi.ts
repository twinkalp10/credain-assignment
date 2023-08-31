import axios from "axios";

const apiKey = "ac81b2799293d647b3bb5ca75c3bcc03";

export const fetchExchangeRates = async () => {
  try {
    const response = await axios.get(
      `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`
    );
    const exchangeRates = response.data.rates;
    const usdToInrRate = exchangeRates.INR;

    console.log(`Current USD to INR exchange rate: ${usdToInrRate}`);
    return usdToInrRate
  } catch (error) {

    console.error("Error fetching exchange rates:", error);
    return 0
  }
};


