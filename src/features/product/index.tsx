import React, { useMemo, useState, useEffect, useRef } from 'react';
import Searchbar from '../../components/Searchbar';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { RootStyle } from './styles';
import { Product } from './types';
import { useSearchProductsQuery } from '../../app/api/services/product/productApi';
import ProductList from './ProductList';

const PAGE_SIZE = 20;

const ProductManagement: React.FC = () => {
    const listRef = useRef(null);
    const [skip, setSkip] = useState<number>(0);
    const [keyword, setKeyword] = useState<string>('');
    const [products, setProducts] = useState<Product[]>([]);

    const params = useMemo(() => ({
        skip,
        limit: PAGE_SIZE,
        q: keyword,
    }), [skip, keyword]);

    const { data, isFetching } = useSearchProductsQuery(params);
    
    const handleSearch = (keyword: string) => {
        setSkip(0);
        setKeyword(keyword);
    };

    const handleLoadMore = () => {
        setSkip(skip + PAGE_SIZE);
    };

    useInfiniteScroll(listRef, handleLoadMore, isFetching);

    useEffect(() => {
        if (data?.products) {
            if (skip === 0) setProducts(data.products);
            else setProducts([...products, ...data.products]);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);


    return (
        <RootStyle>
            <Searchbar
                allowTypingSearch
                defaultKeyword={keyword}
                onSearch={handleSearch}
            />
            <ProductList products={products} ref={listRef} />
        </RootStyle>
    );
};

export default ProductManagement;
