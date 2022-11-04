import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { green, purple } from '@mui/material/colors';



const ColorButton = styled(Button)(({ theme}) => ({
  color: theme.palette.getContrastText(purple[400]),
  backgroundColor: green[400],
  '&:hover': {
    backgroundColor: green[700],
  },
  borderRadius: '2px',
  gap: '10px',
  fontSize: '16px',
  fontFamily: 'Helvetica',
  textTransform:'none',
  
}));

export default function ButtonCustom({textButton, link}) {
  return (
    <a  href={link} style={{textDecoration:'none'}}>
      <ColorButton variant='contained'> {textButton}</ColorButton>
    </a>
  );
}
