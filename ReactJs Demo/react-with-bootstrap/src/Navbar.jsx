import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <>
            
            <Typography>Hello Pritam Ray</Typography> {" "}
            <Button variant="text">Save Button</Button>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>{" "}
            <Button variant="outlined">Outlined</Button>
        </>
    );
}

export default Navbar;
