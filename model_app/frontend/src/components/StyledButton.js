import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)({
  height: 48,
  padding: '0 30px',
  borderRadius: 3,
  borderColor: '#66FCF1',
  backgroundColor: '#66FCF1',
  border: '1px solid',
  color: '#444f56',
  "&:hover": {
    backgroundColor: '#222629',
    color: '#66FCF1',
    borderColor: '#66FCF1',
    boxShadow: '0px 0px 10px #222629',
  },
});

export default StyledButton;
