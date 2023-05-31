import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';

const Navbar = () => (
  <Stack
    direction='row'
    p={2}
    alignItems='center'
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link>
      <img src={logo} alt='logo' height={45} />
    </Link>
  </Stack>
);

export default Navbar;
