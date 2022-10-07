import axios from "axios"
import fetch from "node-fetch"
import { env } from "process";


export const sendEvents = async (events: any[]) => {
  try {
    await fetch('https://api.datadoghq.com/api/v1/events', {
      method: 'post',
      body: JSON.stringify({
        text: JSON.stringify(events),
        title: events 
      }),
      headers: {'Content-Type': 'application/json', 'Api-Key': env.NEW_RELIC_LICENSE_KEY ?? ''}
    });
  } catch (e) {
    console.log('Error sending event', e)
  }
}