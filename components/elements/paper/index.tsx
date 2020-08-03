import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';

export default function AppPaper({ children }: { children: React.ReactNode }) {
  // スタイルの取得
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      { children }
    </Paper>
  )
}