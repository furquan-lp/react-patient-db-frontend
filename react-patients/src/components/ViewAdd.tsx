import { Box, Card, InputAdornment, TextField } from "@mui/material";

export default function ViewAdd() {
  return (
    <Card sx={{ my: 4, p: 2, height: 1, width: 700 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, }}>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <TextField id="outlined-basic" label="Patient ID" variant="outlined" InputProps={{ readOnly: true }}
            defaultValue='ID2023' />
          <TextField id="outlined-basic" label="Patient Name" variant="outlined" />
          <TextField id="outlined-basic" label="Location" variant="outlined" />
        </Box>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <TextField sx={{ width: '8ch' }} id="outlined-basic" label="Age" variant="outlined" />
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }} />
          <TextField sx={{ width: '42ch' }} id="outlined-basic" label="Address" variant="outlined" />
        </Box>
      </Box>
    </Card>
  );
}