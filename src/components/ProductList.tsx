import ProductListItem from './ProductListItem'
import { Grid } from '@mui/material'
import productsArray from '../utils/productsArray'

type Props = {
    currencyType: string
    exchangeCurrencyCoe: number
    onExchangeToUah: (price: number) => void
    onExchangeToUsd: (price: number) => void
    onExchangeToEur: (price: number) => void
    addProductToCart: (price: number) => void
}

const ProductList = ({
    currencyType,
    exchangeCurrencyCoe,
    onExchangeToUah,
    onExchangeToUsd,
    onExchangeToEur,
    addProductToCart,
}: Props) => {
    return (
        <>
            <Grid container spacing={3}>
                {productsArray.map(({ id, title, description, price }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        {' '}
                        <ProductListItem
                            id={id}
                            title={title}
                            description={description}
                            price={price}
                            currencyType={currencyType}
                            exchangeCurrencyCoe={exchangeCurrencyCoe}
                            onExchangeToUah={onExchangeToUah}
                            onExchangeToUsd={onExchangeToUsd}
                            onExchangeToEur={onExchangeToEur}
                            addProductToCart={addProductToCart}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductList
