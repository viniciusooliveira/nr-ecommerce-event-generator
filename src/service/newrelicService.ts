import * as dotenv from 'dotenv'
dotenv.config()

import * as nr from 'newrelic'

export const sendEvent = (name: string, event: any) => {
  nr.recordCustomEvent(name, event)
}