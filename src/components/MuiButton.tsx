import { Stack, Button, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='https://google.com'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='outlined' color='primary'>Primary</Button>
                <Button variant='outlined' color='secondary'>Secondary</Button>
                <Button variant='outlined' color='error'>Error</Button>
                <Button variant='outlined' color='warning'>Warning</Button>
                <Button variant='outlined' color='info'>Info</Button>
                <Button variant='outlined' color='success'>Success</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={() => { console.log('clicked'); }}>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />}>Send</Button>
                <IconButton aria-label='send' color='success' size='small'>
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack direction={'row'}>
                <ButtonGroup
                    variant='outlined'
                    orientation='vertical'
                    size='medium'
                    color='secondary'
                    aria-label='aligment button group'
                >
                    <Button onClick={() => { alert('Left clicked'); }}>Left</Button>
                    <Button>Center</Button>
                    <Button variant='contained'>Right</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    )
}

