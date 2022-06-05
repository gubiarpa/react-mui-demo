import { Typography } from '@mui/material';

export const MuiTypography = () => {
    return (
        <>
            <Typography variant='h1'>Heading 1</Typography>
            <Typography variant='h2'>Heading 2</Typography>
            <Typography variant='h3'>Heading 3</Typography>
            <Typography variant='h4' component='h1' gutterBottom>Heading 4 with margin</Typography>
            <Typography variant='h5'>Heading 5</Typography>
            <Typography variant='h6'>Heading 6</Typography>

            <Typography variant='subtitle1'>Subtitle 1</Typography>
            <Typography variant='subtitle2'>Subtitle 2</Typography>

            <Typography variant='body1'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum totam dolore temporibus, suscipit aliquam autem eos. Cum molestiae consequatur voluptatibus aliquid! Et ratione non magni nisi earum vero incidunt! Quibusdam.
            </Typography>
            <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamus? Numquam repellendus corrupti explicabo deserunt repudiandae vero quisquam magni cupiditate consequatur hic. Quod hic iure facilis nulla veniam deserunt eos?
            </Typography>
        </>
    )
}
