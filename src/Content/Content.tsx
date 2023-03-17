import { Button, Container, Typography } from '@mui/material'
import ProductList from '../components/ProductList'
import { useState } from 'react'

type Props = {}

const Content = (props: Props) => {
    const [currencyType, setCurrencyType] = useState<string>('UAH')

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
                        onClick={() => setCurrencyType('UAH')}
                    >
                        UAH
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => setCurrencyType('USD')}
                    >
                        USD
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => setCurrencyType('EUR')}
                    >
                        EUR
                    </Button>
                </Typography>
                <ProductList currencyType={currencyType} />
            </Container>
        </>
    )
}
export default Content
