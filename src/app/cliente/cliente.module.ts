import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ClienteRoutingModule } from './cliente-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { TabelaComponent } from './tabela/tabela.component';



@NgModule({
  declarations: [
    FormularioComponent,
    TabelaComponent
  ],
  imports: [
    FileUploadModule,
    InputMaskModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ClienteRoutingModule,
    TableModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
