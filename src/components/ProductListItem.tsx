import {
    Card,
    CardContent,
    CardActions,
    Button,
    TextField,
} from '@mui/material'
import productsArray, {
    getProductsObject,
    Product,
} from '../utils/productsArray'

type Props = {
    id: number
    title: string
    description: string
    price: number
    currencyType: string
    exchangeCurrencyCoe: number
    onExchangeToUah: (price: number) => void
    onExchangeToUsd: (price: number) => void
    onExchangeToEur: (price: number) => void
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const ProductListItem = ({
    id,
    title,
    description,
    price,
    currencyType,
    exchangeCurrencyCoe,
    onExchangeToUah,
    onExchangeToUsd,
    onExchangeToEur,
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const currency = price * exchangeCurrencyCoe
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-title">{title}</div>
                    <div className="product-description">{description}</div>
                    <div className="product-price">
                        <TextField
                            size="small"
                            variant="standard"
                            value={currencyType}
                        ></TextField>{' '}
                        <TextField
                            size="small"
                            variant="standard"
                            value={currency.toFixed(2)}
                        ></TextField>{' '}
                    </div>
                    <div>
                        {Object.keys(productsInCart).map((productId) => (
                            <div key={productId}>
                                {productsObject[parseInt(productId)].price}
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardActions>
                    <Button variant="contained">Buy</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default ProductListItem
