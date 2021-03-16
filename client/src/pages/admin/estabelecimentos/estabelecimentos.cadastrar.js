import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';

const useStyles = makeStyles((theme) => ({
  root: {display: 'flex',},
  title: {flexGrow: 1,},
  appBarSpacer: theme.mixins.toolbar,
  content: {flexGrow: 1,height: '100vh',overflow: 'auto',},
  container: {paddingTop: theme.spacing(4), paddingBottom: theme.spacing(4),},
  paper: {padding: 15,display: 'flex',overflow: 'auto',flexDirection: 'column',},
  formControl:{width:'100%'}

}));

export default function EstabelecimentoCadastrar() {
  const classes = useStyles();

  const [cnpj, setCnpj] = useState('');
  const [razaosocial, setRazaosocial] = useState('');
  const [nomefantasia, setNomeFantasia] = useState('');


  //outra forma de coletar os dados
/*  const {form, setForm} = useState({
    cnpj:'',
    razao social:'',
    nome fantasia: '',
  });
*/   
  return (
    <div className={classes.root}>
     
     <MenuAdmin title={'ESTABELECIMENTO'}/> 
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <Paper className={classes.paper}>
                 <h2>Cadastro De Estabelecimentos</h2>
                 <Grid container spacing={3}>
                    <Grid item xs={16} sm={16}>
                      <TextField
                      required
                      id="cnpj"
                      name="cnpj"
                      label="CNPJ"
                      fullWidth
                      autoComplete="cnpj"
                      value={cnpj}
                      onChange={e => setCnpj(e.target.value)}
                    />
                  </Grid>
                </Grid>
              <Grid item xs={16} sm={16}>
                    <TextField
                      required
                      id="razao social"
                      name="razao socia"
                      label="Razão Social"
                      fullWidth
                      autoComplete="razao social"
                      value={razaosocial}
                      onChange={e => setRazaoSocial(e.target.value)}
                    />
                   </Grid>
    
                <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="nome fantasia"
                      name="nome fantasia"
                      label="Nome Fantasia"
                      fullWidth
                      autoComplete="nome fantasia"
                      value={nomefantasia}
                      onChange={e => setNomeFantasia(e.target.value)}
                    />
                   </Grid>
                   <Grid item xs={12} sm={12}>
                   <Button variant="contained" color="primary">
                     Salvar
                   </Button>
                   </Grid>
                  </Grid>
                 </Paper>
                </Grid>
              <Grid>

          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}