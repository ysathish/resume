import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  implements OnInit{
  projectName={} as Project[];
  isCollapsed:boolean=true;
  typescript:boolean=false;
  angular:boolean=false;
  filtering:boolean=false;
  
  constructor(private titleSerive : Title,
              private projectService: ProjectsService){
    this.titleSerive.setTitle('Sathish Yannapu - Portfolio')
  }
  ngOnInit(): void {
    this.projectName=this.projectService.getProject()
  }
  filter(){
    let filterTags:Tag[]=[];
    if(this.typescript){
      filterTags.push(Tag.Typescript)
    }
    if(this.angular){
      filterTags.push(Tag.Angular)
    }
    if(this.angular || this.typescript){
      this.filtering=true;
    }
    else{
      this.filtering=false;
    }
    this.projectName=this.projectService.getProjectByFilter(filterTags);
  }
  resetFilter(){
    this.angular=false;
    this.typescript=false;
    this.filtering=false
    this.projectName=this.projectService.getProject();
  }

}
