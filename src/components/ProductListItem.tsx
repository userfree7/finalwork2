import { Card, CardContent, CardActions, Button } from '@mui/material'

type Props = {
    title: string
    description: string
    price: number
}

const ProductListItem = (props: Props) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-title">{props.title}</div>
                    <div className="product-description">
                        {props.description}
                    </div>
                    <div className="product-price">{props.price}</div>
                </CardContent>
                <CardActions>
                    <Button variant="contained">Buy</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default ProductListItem
