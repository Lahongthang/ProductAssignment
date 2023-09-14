import React, { useEffect, useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    defaultKeyword?: string;
    allowTypingSearch?: boolean;
    onSearch: (keyword: string) => void;
    sx?: object;
};

const Searchbar: React.FC<Props> = ({ sx, onSearch, defaultKeyword = '', allowTypingSearch = false }) => {
    const [keyword, setKeyword] = useState<string>(defaultKeyword);

    const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') onSearch(keyword);
    };

    useEffect(() => {
        if (allowTypingSearch) onSearch(keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allowTypingSearch, keyword]);

    return (
        <Stack
            spacing={2}
            direction='row'
            alignItems='center'
        >
            <TextField
                fullWidth
                size="small"
                value={keyword}
                onKeyDown={handleKeyDown}
                onChange={handleChangeKeyword}
                placeholder="Enter keyword here"
                sx={{ maxWidth: 350, ...sx }}
            />
            <IconButton size="small" onClick={() => onSearch(keyword)}>
                <SearchIcon />
            </IconButton>
        </Stack>
    );
};

export default Searchbar;
