const parseClientsData = (data) => {
  return data.map((el, index) => {
    return {
      id: index,
      ...el
    }
  })
}

export default parseClientsData
