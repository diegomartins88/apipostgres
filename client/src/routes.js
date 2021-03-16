import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';


//IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';
import Estabelecimentos from './pages/admin/estabelecimentos';
import EstabelecimentosEditar from './pages/admin/estabelecimentos/estabelecimentos.editar';
import EstabelecimentosCadastrar from './pages/admin/estabelecimentos/estabelecimentos.cadastrar';


import Usuarios from './pages/admin/usuarios';
import UsuariosCadastrar from './pages/admin/usuarios/usuarios.cadastrar';
import UsuariosEditar from './pages/admin/usuarios/usuarios.editar';

//iMPORTS CLIENT
import Home from './pages/client/home';
import EstabelecimentosDetails  from './pages/client/estabelecimentos/estabelecimentos.details';
import UsuariosListagem from './pages/admin/usuarios';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar';
import UsuarioEditar from './pages/admin/usuarios/usuarios.editar';
import EstabelecimentoCadastrar from './pages/admin/estabelecimentos/estabelecimentos.cadastrar';
import EstabelecimentoEditar from './pages/admin/estabelecimentos/estabelecimentos.editar';


export default function Routes(){

    return(
    <BrowserRouter>
        <Switch>
            {/* Rota Cliente*/}
           <Route path="/" exact component={Home} />
           <Route path="/estabelecimento/:idEstabelecimento" exact component={EstabelecimentosDetails} />

            {/* Rota Admin */}
           <Route path="/admin" exact component={Dashboard} />

           <Route path="/admin/estabelecimentos" exact component={Estabelecimentos} />
           <Route path="/admin/estabelecimentos/cadastrar" exact component={EstabelecimentosCadastrar} />
           <Route path="/admin/estabelecimentos/editar/:idEstabelecimento" exact component={EstabelecimentosEditar} />

           <Route path="/admin/usuarios" exact component={Usuarios} />
           <Route path="/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
           <Route path="/admin/usuarios/editar/:idUsuario" exact component={UsuarioEditar} />
        </Switch>
    </BrowserRouter>
    )
}