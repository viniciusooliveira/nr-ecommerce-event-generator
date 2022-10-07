import axios from "axios"
import fetch from "node-fetch"
import { env } from "process";


export const sendEvents = async (events: any[]) => {
  try {
    await fetch(`https://insights-collector.newrelic.com/v1/accounts/${env.NEW_RELIC_ACCOUNT_ID}/events`, {
      method: 'post',
      body: JSON.stringify(events),
      headers: {'Content-Type': 'application/json', 'Api-Key': env.NEW_RELIC_LICENSE_KEY ?? ''}
    });
  } catch (e) {
    console.log('Error sending event', e)
  }
}