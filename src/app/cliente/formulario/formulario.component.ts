import { ViacepService } from './../../viacep.service';
import { ClienteService } from './../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
//  form: FormGroup = new FormGroup({});
  
  cliente: any = {
    id: "",
    nome: "",
    sobrenome: "",
    dataNasc: "",
    email: "",
    telefone: "",
    cpf: "",
    rg: "",
    cep: "",
    logradouro: "",
    complemento: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""      
    }
   
    

  codigoCliente: any;
  
  operacao: boolean = true;

  constructor(
    private service: ClienteService,
    private messageService: MessageService,  
    private route: ActivatedRoute,
    private title: Title,
    private router: Router,
    private viacepService: ViacepService
//    private formBuilder: FormBuilder
    ) { }
    

    ngOnInit(): void {
/*
      this.form = this.formBuilder.group({
        nome: ['', Validators.required],
        sobrenome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', Validators.required],
        cpf: ['', Validators.required],
        rg: ['', Validators.required],
        dataNascimento: ['', Validators.required],
        cep: ['', Validators.pattern(/^\d{5}\-\d{3}$/)],
        lagradouro: [''],
        bairro: [''],
        estado: [''],
        cidade: ['']
      });
  */    
      

 //     this.listarEstados(); 
      this.codigoCliente = this.route.snapshot.params['codigo'];
      this.title.setTitle('Novo cliente');
  
      if (this.codigoCliente) {
        this.operacao = false;
        this.carregarCliente(this.codigoCliente);
      }
    }
  
//    listarEstados() {
//      this.service.listarEstados().subscribe(resposta => { 
//        this.estados = <any>resposta;    
//      });
//    }
  
//    listarCidades(){
//      this.cidades = [];
//      let id: number = this.estado.id;
     
//      this.service.listarCidades(id).subscribe(resposta => {
//        this.cidades = <any>resposta;  
//        if(this.codigoCliente && this.cliente.endereco.estado.id == this.estado.id){
//          this.cidade = {id: this.cliente.endereco.estado.cidade.id, nome: this.cliente.endereco.estado.cidade.nome};        
//        }else{
//          this.cidade = {id: this.cidades[0].id, nome: this.cidades[0].nome};
//        }          
//      });
//    }
  
    carregarCliente(codigoCliente: number){
      this.service.buscarById(codigoCliente).subscribe(resposta => {      
        this.cliente = <any>resposta; 
//        this.estado = {id: this.cliente.endereco.estado.id, nome: this.cliente.endereco.estado.nome};
//        this.listarCidades();
        this.title.setTitle(`Edição do cliente: ${this.cliente.id}`);
});    
    }
  
    cadastrarOuAtualizar(){
      if(this.operacao){
        this.cadastrar();
      }else{
        this.atualizar();
      }
    }
  
    cadastrar(){
  
 //     this.preencherDados();
      
      this.service.salvar(this.cliente).subscribe(
        resposta => {
        this.messageService.add(
        {
          key: 'toast',
          severity: 'success',
          summary: 'CLIENTE',
          detail: 'cadastrado com sucesso!'
        });
        this.limparFormulario();     
      },    
      () => {
        this.messageService.add(
          {
            key: 'toast',
            severity: 'error',
            summary: 'ERRO',
            detail: 'Não foi possível cadastrar o cliente!'
          });
      });
    }
 /*
    preencherDados() {
      this.cliente.endereco.estado.id = this.estado.id;
      this.cliente.endereco.estado.nome = this.estado.nome;
      this.cliente.endereco.estado.cidade.id = this.cidade.id;
      this.cliente.endereco.estado.cidade.nome = this.cidade.nome;
    }
  */
    atualizar(){
  
 //     this.preencherDados();
      
      this.service.atualizar(this.cliente).subscribe(
        resposta => {
        this.messageService.add(
        {
          key: 'toast',
          severity: 'success',
          summary: 'CLIENTE',
          detail: 'atualizado com sucesso!'
        });
        this.limparFormulario(); //limpar os campos     
        this.operacao = true; 
        this.router.navigate(['/listar/cliente']);
      },    
      () => {
        this.messageService.add(
          {
            key: 'toast',
            severity: 'error',
            summary: 'ERRO',
            detail: 'Não foi possível cadastrar o cliente!'
          });
      });
    }
  
    limparFormulario() {    
      this.cliente = {}; 
//      this.cliente.endereco = {};
//      this.cidades = [];
//      this.estados = [];
//      this.listarEstados();
    }

/*
    submit(){
      console.log(this.form.value)
      console.log(this.form.valid)
      console.log(this.form.errors)
    }
*/


buscarCep(cep:any){
  console.log(cep);
  if(cep.length == 9){
    this.viacepService.search(cep.replace('.','')).subscribe(data => {
      console.log(data);
      this.cliente.logradouro = data.logradouro;
      this.cliente.bairro = data.bairro;
      this.cliente.estado = data.uf;
      this.cliente.cidade = data.localidade;
    })
  }
}

  }
  