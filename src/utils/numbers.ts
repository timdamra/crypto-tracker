export function formatBigNumber(amount: string): string;
export function formatBigNumber(amount: number): string;

export function formatBigNumber(amount: string | number): string {
    let amountToFormat: string;
    if (typeof amount === 'number') {
        amount = Math.round(amount);
    } else {
        amount = Math.round(Number(amount));
    }

    amountToFormat = String(amount);

    let response: string;
    if (amountToFormat.length > 6) {
        switch(amountToFormat.length) {
            case 7:
                response = `${amountToFormat.substring(0, 1)}M`;
                break;
            case 8:
                response = `${amountToFormat.substring(0, 2)}M`;
                break;
            case 9:
                response = `${amountToFormat.substring(0, 3)}M`;
                break;
            case 10:
                response = `${amountToFormat.substring(0, 1)}B`;
                break;
            case 11:
                response = `${amountToFormat.substring(0, 2)}B`;
                break;
            case 12:
                response = `${amountToFormat.substring(0, 3)}B`;
                break;
            case 13:
                response = `${amountToFormat.substring(0,1)}T`;
                break;
            default:
                response = amountToFormat;
                break;
        }
    } else {
        response = amountToFormat;
    }

    return response;
}
