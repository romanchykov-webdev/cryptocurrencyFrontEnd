import React, {FC, useState} from 'react';
import {Stack, Autocomplete, TextField} from "@mui/material";
// import {Search} from "@mui/icons-material";
// import {useStyles} from './style'
import {ISingleAsset} from "../../common/types/assets";
import {useAppSelector} from "../../utils/hook";
import {useNavigate} from "react-router-dom";

const SearchBarComponent:FC = ():JSX.Element => {
    const [selectedItem,setSelectedItem]=useState<string | null>('')
    const navigate = useNavigate()
    //
    const assetsArray: ISingleAsset[] = useAppSelector(
        (state) => state.assets.assets
    )
    //
    // console.log(selectedItem)
    return (
        <Stack spacing={2} sx={{width: '300px'}}>
            <Autocomplete
                value={selectedItem}
                onChange={
                (e: any, value: string | null) => {
                    navigate(`single/${value}`)
                    setSelectedItem(null)
                }
            }
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