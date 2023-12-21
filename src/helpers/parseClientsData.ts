import uuid from 'uuidv4'

import { type IClient, type IMockClient } from '../types/IClient'

const parseClientsData = (data: IMockClient[]): IClient[] => {
  return data.map((el) => {
    return {
      id: uuid(),
      ...el
    }
  })
}

export default parseClientsData
