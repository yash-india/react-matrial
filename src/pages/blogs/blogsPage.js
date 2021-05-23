import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import Card from '../../components/card/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const BlogList = () => {
  const classes = useStyles();
  const [list, setList] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      try {
        let list = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=531cb56f0a5141538d8e1a14e960af94");
        setList(list?.data?.articles);
        setLoading(false);
      } catch (err) {
        setList([]);
        setLoading(false);
      }
    }, 6000);
    fetchList();
  }, []);

  const fetchList = async () => {
    
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column"
        justify="center"
        alignItems="center">
        <Grid item xs={12}>
          {list.length > 0 && list.map((item, index) =>
            <Card className={classes.paper} key={index} 
              avatarImg={item?.source?.name} 
              title={item?.title} 
              subTitle={item?.author}
              overview={item?.description}
              img={item?.urlToImage}
              content={item?.content}
              loading={loading}/>
          )}
          {list.length === 0 && loading === false &&<p>Something Went Wrong</p>}
        </Grid>
      </Grid>
    </div>
  );
}

export default BlogList;