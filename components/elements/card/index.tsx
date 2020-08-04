import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

export interface CardProp {
  headerImage: string;
  title: string;
  subTitle?: string;
  className?: string;
}

const AppCard: React.FC<CardProp> = props => {
  const { headerImage, title, subTitle, className, children } = props;
  const classes = useStyles();
  return (
    <Card className={`${classes.root} ${className}`}>
      <CardContent>
        <Box display='flex'>
          <Box mr={1}>
            <img src={`/images/${headerImage}`} className={classes.headerImage} />
          </Box>
          <Box>
            <Typography component='h5' variant='h5' className={classes.headerName}>
              {title}
            </Typography>
            <Typography color='textSecondary'>
              {subTitle}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      {children && <CardActions>{children}</CardActions>}
    </Card>
  );
}

export default AppCard;