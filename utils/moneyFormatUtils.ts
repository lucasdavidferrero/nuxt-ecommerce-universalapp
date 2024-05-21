import Decimal from 'decimal.js'
export function toPriceText (price: number): string {
    const decimalNumber = new Decimal(price);

    // Convert to a string and add the decimal point
    let numberStr = decimalNumber.toFixed(0); // Convert to string without decimals
    let formattedStr = '';

    if (numberStr.length > 3) {
        const len = numberStr.length;
        formattedStr = numberStr.substring(0, len - 3) + '.' + numberStr.substring(len - 3);
    } else {
        formattedStr = numberStr;
    }

    return formattedStr;
}
function toPercentText (percent: number): string {
    return ''
}
