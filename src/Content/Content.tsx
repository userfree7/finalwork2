import { Button, Container, Typography } from '@mui/material'
import ProductList from '../components/ProductList'
import { useState } from 'react'
import productsArray, {
    getProductsObject,
    Product,
} from '../utils/productsArray'

type Props = {}
type productsInCart = {
    [id: number]: number
}

const Content = ({}: Props) => {
    const [currencyType, setCurrencyType] = useState<string>('UAH')
    const [exchangeCurrencyCoe, setExchangeCurrencyCoe] = useState<number>(1)
    const [productsInCart, setProductsInCart] = useState<productsInCart>({
        1: 1,
        2: 2,
        3: 3,
    })

    const onExchangeToUah = () => {
        setExchangeCurrencyCoe(1)
    }

    const onExchangeToUsd = () => {
        setExchangeCurrencyCoe(0.025)
    }
    const onExchangeToEur = () => {
        setExchangeCurrencyCoe(0.0255)
    }

    return (
        <>
            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <Typography
                    sx={{ fontWeight: 'bold' }}
                    align="center"
                    variant="h3"
                >
                    Our shop page
                </Typography>
                <Typography
                    align="center"
                    sx={{
                        padding: '30px 0',
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={() => {
                            setCurrencyType('UAH')
                            onExchangeToUah()
                        }}
                    >
                        UAH
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setCurrencyType('USD')
                            onExchangeToUsd()
                        }}
                    >
                        USD
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setCurrencyType('EUR')
                            onExchangeToEur()
                        }}
                    >
                        EUR
                    </Button>
                </Typography>
                <ProductList
                    currencyType={currencyType}
                    exchangeCurrencyCoe={exchangeCurrencyCoe}
                    onExchangeToUah={onExchangeToUah}
                    onExchangeToUsd={onExchangeToUsd}
                    onExchangeToEur={onExchangeToEur}
                    productsInCart={productsInCart}
                />
            </Container>
        </>
    )
}
export default Content
