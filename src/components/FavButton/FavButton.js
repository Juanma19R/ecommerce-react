//Componentes
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FloatingActionButtonSize() {
    return (
        <Fab size="small" color="primary" aria-label="add">
            <FavoriteIcon />
        </Fab>
    )
}