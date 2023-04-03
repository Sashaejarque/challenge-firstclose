import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import Header from '../../components/Header/Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isWrapped, setIsWrapped] = React.useState(false);
  useEffect(() => {
    if(window.parent === null) {
      setIsWrapped(false);
    } else {
      setIsWrapped(true);
    }
  }, [])
  return (
    <Box sx={styles.container}>
      <Header />
      {isWrapped ? (
        <h1>esta wrappeado</h1>
      ) : (
        <Grid container mt={12} paddingX={4}>
        {children}
      </Grid>
      )}
    </Box>
  )
};

const styles = {
  container: {
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default Layout;
