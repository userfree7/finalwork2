import ProductListItem from './ProductListItem'
import { Grid } from '@mui/material'
import productsArray from '../utils/productsArray'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Grid container spacing={3}>
                {productsArray.map(({ id, title, description, price }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        {' '}
                        <ProductListItem
                            title={title}
                            description={description}
                            price={price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductList
