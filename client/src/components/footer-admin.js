import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Projeto © '}
        <Link color="inherit" href="javascript:;">
        www.sysdata.com.br
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }