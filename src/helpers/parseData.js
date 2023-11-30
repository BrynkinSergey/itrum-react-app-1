import tableData from "../constants/tableData.constants";

const parseData = (data) => {
    return tableData.map(el => {
        const {cashback, ...other} = el
        return {
            cashback: `${Math.trunc(el.cashback * 100)}%`,
            ...other
        }
    })
}

export default parseData
