import { TabelaComponent } from './tabela/tabela.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    FormularioComponent,
    TabelaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    TableModule
  
  ]
})
export class ClienteModule { }
