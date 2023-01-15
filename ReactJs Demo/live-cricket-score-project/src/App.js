import { Fragment, useEffect, useState } from 'react';
import './App.css';
import MyCards from './components/MyCards';
import Navbar from './components/Navbar';
import LiveScoreService from './services/Api'
import { Grid, Typography } from '@mui/material';

//505561c9-8ca8-4eb4-9494-f832ba4b179c

const App = () => {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    console.log("Hello");

    LiveScoreService.getMatches()
      .then((response) => {
        console.log(response.data);
        setMatches(response.data.data)
      })
      .catch(error => alert("could not be loaded data"))

  }, [])


  return (
    <div className="App">
      <Navbar />
      <Typography variant='h3' style={{ marginTop: 20 }}>Welcome to my Live Score APP</Typography>
      <Grid container>

        <Grid item={true} sm={3}>

        </Grid>
        <Grid item={true} sm={6}>
          {
            matches.map((match) => (
              <Fragment key={match.id}>
                {
                  match.matchType === "t20" ? (<MyCards match={match} />) : ("")
                }
              </Fragment>

            ))
          }
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
