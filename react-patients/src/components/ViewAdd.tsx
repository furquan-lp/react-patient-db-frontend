import { Box, Card, InputAdornment, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function ViewAdd() {
  return (
    <Box sx={{ my: 4, gap: 2, display: 'flex', flexDirection: 'column' }}>
      <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2, height: 1 / 5, width: 700 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, }}>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <TextField id="outlined-basic" label="Patient ID" variant="outlined" InputProps={{ readOnly: true }}
              defaultValue='ID2023' />
            <TextField id="outlined-basic" label="Patient Name" variant="outlined" />
            <TextField id="outlined-basic" label="Location" variant="outlined" />
          </Box>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <TextField sx={{ width: '8ch' }} id="outlined-basic" label="Age" variant="outlined" />
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" InputProps={{
              startAdornment: <InputAdornment position="start">+91</InputAdornment>
            }} />
            <TextField sx={{ width: '42ch' }} id="outlined-basic" label="Address" variant="outlined" />
          </Box>
        </Box>
      </Card>
      <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2, height: 1 / 5, width: 700 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 3 }}>
          <TextField id="outlined-basic" label="Prescription" variant="outlined" />
          <TextField id="outlined-basic" label="Dose" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Visit Date" />
            <DatePicker label="Next Visit" />
          </LocalizationProvider>
        </Box>
      </Card>

      <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2, height: 1 / 5, width: 700 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 3 }}>
          <TextField id="outlined-basic" label="Physician ID" variant="outlined" />
          <TextField id="outlined-basic" label="Physician Name" variant="outlined" />
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>
          }} sx={{ width: '25ch' }} />
          <TextField id="outlined-basic" label="Bill" variant="outlined" InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>
          }} sx={{ width: '12ch' }} />
        </Box>
      </Card>
    </Box>
  );
}