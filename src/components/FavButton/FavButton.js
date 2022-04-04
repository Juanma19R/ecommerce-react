//Componentes
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FloatingActionButtonSize() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab size="small" color="primary" aria-label="add">
                <FavoriteIcon />
            </Fab>
        </Box>
    );
}