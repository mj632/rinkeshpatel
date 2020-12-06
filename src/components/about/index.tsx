import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      width: '500px',
      height: '1500px',
      marginTop: '100px'
    }
  })
);

class About extends React.Component {
  constructor(props: any) {
    super(props);
  }


 render() {
  return (<>
            <div style={{paddingTop: '100px', width: '100%'}}>About Section Current window width: </div>
          </>);
  }
}

export default About;