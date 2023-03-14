import { Container, Typography } from '@mui/material'
import ProductList from '../components/ProductList'

type Props = {}

const Content = (props: Props) => {
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
                Buttons
                <ProductList />
            </Container>
        </>
    )
}
export default Content
