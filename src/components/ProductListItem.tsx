import {
    Card,
    CardContent,
    CardActions,
    Button,
    TextField,
} from '@mui/material'

type Props = {
    title: string
    description: string
    price: number
    currencyType: string
}

const ProductListItem = ({
    title,
    description,
    price,
    currencyType,
}: Props) => {
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
                        {price}
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
