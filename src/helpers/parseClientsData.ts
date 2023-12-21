import { type IClient, type IMockClient } from '../types/IClient'

const parseClientsData = (data: IMockClient[]): IClient[] => {
  return data.map((el, index) => {
    return {
      id: index,
      ...el
    }
  })
}

export default parseClientsData
