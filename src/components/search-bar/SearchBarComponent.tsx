import React, {useMemo} from 'react';
import {Stack, Autocomplete, TextField} from "@mui/material";
// import {Search} from "@mui/icons-material";
import {useStyles} from './style'
import {ISingleAsset} from "../../common/types/assets";
import {useAppSelector} from "../../utils/hook";

const SearchBarComponent = () => {
    const classes = useStyles()
    //
    const assetsArray: ISingleAsset[] = useAppSelector(
        (state) => state.assets.assets
    )
    //
    return (
        <Stack spacing={2} sx={{width:'300px'}}>
            <Autocomplete
                freeSolo
                renderInput={(element) => (
                    <TextField
                        {...element}
                        label={'Поиск'}
                        InputProps={{
                            ...element.InputProps,
                            type: 'search',
                        }}
                    />
                )}
                options={assetsArray.map((element: { name: string }) => element.name)}
            />
        </Stack>
    );
};

export default SearchBarComponent;