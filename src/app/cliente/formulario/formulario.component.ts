import { ClienteService } from './../../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(
    private service: ClienteService,
    private messageService: MessageService,  
    private route: ActivatedRoute,
    private title: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
