import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }


 render() {
  return (<>
            <div style={{marginTop: '100px',width: '100%'}}>Current window width:</div>
          </>);
  }
}

export default Home;