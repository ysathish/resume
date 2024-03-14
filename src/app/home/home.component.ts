import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  featuredProjects={} as Project;
  constructor(private titleSerive : Title,
              private projectService:ProjectsService){
    this.titleSerive.setTitle('Sathish Yannapu - Home')
  }
  ngOnInit(): void {
    this.featuredProjects=this.projectService.getProjectById(1);
  }

}
