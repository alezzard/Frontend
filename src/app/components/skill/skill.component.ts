import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { skills } from 'src/app/moks/mock-skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills : Skill[] = []

  constructor() { }

  ngOnInit(): void {
    this.skills = skills;
  }

}
