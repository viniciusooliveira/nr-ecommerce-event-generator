import { Purchase } from "domain/models/purchase";
import fetch from "node-fetch"
import { env } from "process";


export const savePurchase = async (purchase: Purchase) => {
  try {
    await fetch(`${env.ELASTIC_SEARCH_URL}/${env.ELASTIC_SEARCH_INDEX}/_doc`, {
      method: 'post',
      body: JSON.stringify(purchase),
      headers: {'Content-Type': 'application/json', 'Authorization': `Basic ${env.ELASTIC_SEARCH_TOKEN}`}
    });
  } catch (e) {
    console.log('Error sending purchase', e)
  }
}