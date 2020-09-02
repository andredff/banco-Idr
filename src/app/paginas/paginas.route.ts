import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginasAppComponent } from './paginas.app.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { BancoComponent } from './banco/banco.component';
import { CartoesComponent } from './cartoes/cartoes.component';


const paginasRouterConfig: Routes = [
    {
        path: '', component: PaginasAppComponent,
        children: [
            { path: 'institucional', component: InstitucionalComponent },
            { path: 'produtos', component: ProdutosComponent },
            { path: 'para-voce', component: BancoComponent},
            { path: 'cartoes', component: CartoesComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(paginasRouterConfig)
    ],
    exports: [RouterModule]
})
export class PaginasRoutingModule { }
