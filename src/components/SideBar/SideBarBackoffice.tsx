import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  Box,
  CssBaseline,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Router, { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useAuth } from '../../features/Login/context/AuthProvider';
import useResponsiveScreen from '../../hooks/useResponsiveScreen';

interface ObjectType {
  Dashboard: string;
  Productos: string;
  'Add producto': string;
}

interface Props {
  open: boolean;
}

function SideBarBackoffice({ open }: Props): ReactElement {
  const {
    actions: { signOut },
  } = useAuth();
  const router = useRouter();
  const { pathname } = router;
  const { width } = useResponsiveScreen();

  const handleLogout = () => {
    signOut();
    Router.push('/');
  };

  const path = {
    Dashboard: '/admin/dashboard',
    Productos: '/admin/products/list',
    'Add producto': '/admin/products/add',
  };

  const icons = {
    Dashboard: <AutoGraphOutlinedIcon />,
    Productos: <ShoppingCartOutlinedIcon />,
    'Add producto': <AddShoppingCartOutlinedIcon />,
  };

  return (
    <Drawer variant="persistent" anchor="left" open={open} sx={{ zIndex: 1 }}>
      <Box
        sx={[
          styles.drawerContainer,
          {
            width: width > 700 ? 240 : width,
          },
        ]}
      >
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} container justifyContent="center" mt={1}>
            <Box sx={styles.cardContainer}>
              <Typography>Foto</Typography>
              <Typography fontWeight="bold">Sasha Ejarque</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <List>
              {['Dashboard', 'Productos', 'Add producto'].map((text, index) => (
                <ListItem
                  key={text}
                  onClick={() => Router.push(path[text as keyof ObjectType])}
                >
                  <ListItemButton
                    selected={pathname.includes(path[text as keyof ObjectType])}
                  >
                    <ListItemIcon>
                      {icons[text as keyof ObjectType]}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <List>
            <ListItem onClick={handleLogout}>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Box>
    </Drawer>
  );
}

const styles = {
  drawerContainer: {
    paddingTop: '80px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: 200,
    height: 80,
    backgroundColor: 'rgba(145, 158, 171, 0.12)',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  bekkaTittle: {
    color: 'white',
    cursor: 'pointer',
    fontFamily: 'TenorSans',
    letterSpacing: 20,
    fontSize: 30,
  },
};

export default SideBarBackoffice;
