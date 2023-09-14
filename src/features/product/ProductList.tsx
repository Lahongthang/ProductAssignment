import { forwardRef } from 'react';
import { Box, Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { Product } from './types';

type Props = {
    products: Product[];
};

const ProductList = forwardRef<HTMLDivElement, Props>(({ products = [] }, ref) => {
    return (
        <Box
            ref={ref}
            sx={{ height: 0, flex: 1, overflowY: 'scroll' }}>
            <Grid container spacing={2}>
                {products?.map((product) => 
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                )}
            </Grid>
        </Box>
    );
});

export default ProductList;
