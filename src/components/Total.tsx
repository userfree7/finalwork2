import { Typography } from '@mui/material'

type Props = {
    currencyType: string
    cartData: number
    exchangeCurrencyCoe: number
}

const Total = ({ currencyType, cartData, exchangeCurrencyCoe }: Props) => {
    return (
        <>
            <Typography
                align="center"
                sx={{
                    padding: '30px 0',
                }}
            >
                <div>
                    Total: {(cartData * exchangeCurrencyCoe).toFixed(2)}{' '}
                    {currencyType}
                </div>
            </Typography>
        </>
    )
}
export default Total
