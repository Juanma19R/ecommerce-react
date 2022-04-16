//Componentes
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'

export default function HalfRating() {
    return (
        <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
        </Stack>
    )
}