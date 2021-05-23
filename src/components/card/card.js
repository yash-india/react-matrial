import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Favorite, Share, ExpandMore, MoreVert} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginTop: theme.spacing(2)
  },
  media: {
    height: 194,
    width: 500,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const CardComponent = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { avatarImg, title, subTitle, overview, content, img, imgAlt="Hero zone img", loading = false } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circle" width={40} height={40} />
          ) : avatarImg ? <Avatar aria-label="recipe">
            {avatarImg[0]}
          </Avatar> : <></>
        }
        action={
          loading ? null : (<IconButton aria-label="settings">
            <MoreVert />
          </IconButton>)
        }
        title={loading ? (
          <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6 }} />
        ) : title}
        subheader={loading ? <Skeleton animation="wave" height={10} width="80%" /> : subTitle}
      />
      { loading ? (
            <Skeleton animation="wave" variant="rect" className={classes.media} />
          ) : img ? <CardMedia
        className={classes.media}
        image={img}
        title={imgAlt}
      /> : <></>}
      <CardContent>
      {loading ? (
          <>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </>
        ) : (<Typography variant="body2" color="textSecondary" component="p">
          {overview}
        </Typography>)}
      </CardContent>
      {loading ? (<></>) : (<CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>)}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

CardComponent.propTypes = {
  avatarImg: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  overview: PropTypes.string,
  content: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string
}

export default CardComponent;