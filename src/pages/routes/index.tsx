import routes 

import React from 'react-router-dom'
//importa as classes do react-router-dom

export const Routes: React.FC = () =>{
    return(
        //vai trocar entre as páginas
        <Switch>
            <Route component={Dashboard} path="/" exact/> {/* componente padrão */}
            <Route component={Repository} path="/repositories"/>
            {/* criando a rota para os repositorios */}
        </Switch>
    )
}