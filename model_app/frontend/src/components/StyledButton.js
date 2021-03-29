import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const StyledButton = styled(Button)({
    borderColor: '#66FCF1',
    backgroundColor: '#66FCF1',
    border: '1px solid',
    color: '#444f56',
    height: 48,
    padding: '0 30px',
    borderRadius: 3,
    background: '#66FCF1',
    color: 'white',
    "&:hover": {
        backgroundColor: 'transparent',
        color: '#66FCF1',
        borderColor: '#66FCF1',
    },
});

export default StyledButton;