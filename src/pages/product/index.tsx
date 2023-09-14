import React from "react";
import { Container } from "@mui/material";
import ProductManagement from "../../features/product";

const ProductPage: React.FC = () => {
    return (
        <Container maxWidth='xl' sx={{ height: '100vh' }}>
            <ProductManagement />
        </Container>
    );
};

export default ProductPage;
