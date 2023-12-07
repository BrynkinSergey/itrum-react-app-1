import tableData from "../constants/tableData.constants";

const parseData = (data) => {
    return tableData.map((el, index) => {
        const {cashback, ...other} = el
        return {
            id: index,
            isChecked: false,
            cashback: `${Math.trunc(el.cashback * 100)}%`,
            ...other
        }
    })
}

export default parseData
