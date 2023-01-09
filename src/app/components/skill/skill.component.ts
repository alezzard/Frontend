import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { skills } from 'src/app/moks/mock-skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills : Skill[] = [/* 
    {
      "imgLogo":"Angular",
      "porcentaje":10
  },
  {
      "imgLogo":"Spring-boot",
      "porcentaje":80
  },
  {
      "imgLogo":"MySQL",
      "porcentaje":60
  },
  {
      "imgLogo":"Comunicacion Asertiva",
      "porcentaje":90
  },
  {
      "imgLogo":"Escucha Empatica.png",
      "porcentaje":90
  },
  {
      "imgLogo":"Retroalimentacion",
      "porcentaje":70
  } */
  ]

  constructor() { }

  ngOnInit(): void {
    this.skills = skills;
  }

}
