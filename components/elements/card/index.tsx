import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

export interface CardProp {
  headerImage: string;
  title: string;
  subTitle?: string;
}

export default function AppCard({ ...props }: CardProp ) {
  const { headerImage, title, subTitle } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box display='flex'>
        <Box mr={1}>
          <img src={`/images/${headerImage}`} className={classes.headerImage} />
        </Box>
        <Box>
          <Typography component='h5' variant='h5'>
            {title}
          </Typography>
          <Typography color='textSecondary'>
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

