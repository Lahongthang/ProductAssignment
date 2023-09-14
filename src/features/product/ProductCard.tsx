import React from "react";
import { Card, Grid, CardMedia, CardHeader, CardContent, Typography, Stack } from '@mui/material';
import { Product } from "./types";

type Props = {
    product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
    return (
        <Grid item xs={3}>
            <Card sx={{ height: 500 }}>
                <CardHeader title={product.title} />
                <CardMedia
                    component='img'
                    image={product.thumbnail}
                    alt={product.title}
                    height={250}
                    width={1}
                />
                <CardContent>
                    <Stack spacing={1}>
                        <Typography>
                            {product.description}
                        </Typography>
                        <Typography variant="subtitle1">
                            {`Price: ${product.price}`}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default ProductCard;
