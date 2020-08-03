import React, { useState } from 'react';
import Head from 'next/head'
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import Container from '@material-ui/core/Container';
import { userTheme, useStyles } from './styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Remove the server-side injected CSS.
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) { jssStyles.parentElement!.removeChild(jssStyles); }
  }, []);
  // ダークテーマの選択状態
  const [darkState, setDarkState] = useState(true);
  // テーマの取得
  const darkTheme = userTheme(darkState);
  // スタイルの取得
  const classes = useStyles();

  /**
   * テーマ変更
   */
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <Head>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography>Header</Typography>
            <Switch checked={darkState} onChange={handleThemeChange}></Switch>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <Container className={classes.container}>
            {children}
          </Container>
        </main>
        <footer>
        </footer>
      </div>
    </ThemeProvider>
  )
}