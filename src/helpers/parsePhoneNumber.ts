const parsePhoneNumber = (number: string) => {
  return `${number[0]} ${number[1]} (${number.slice(2, 5)}) ${number.slice(5, 8)}-${number.slice(8, 10)}-${number.slice(10, 12)}`
}

export default parsePhoneNumber
