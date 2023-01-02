import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DateBox } from '../StyledBoxFixture';

const MaterialUIDatePicker = ({ handleChange, value }) => {
    return (
        <>
            <DateBox>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                            label='Fixture Date'
                            inputFormat='YYYY-MM-DD'
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </DateBox>
        </>
    );
};

export default MaterialUIDatePicker;
