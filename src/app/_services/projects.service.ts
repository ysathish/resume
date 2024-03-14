import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})


export class ProjectsService {
  projectName:Project[]=[
    {id:0,name:'angular',summary:'this is angular project',description:'this is shsgddhg',projectLink:'https://github.com/ysathish',tags:[Tag.Angular],pictures:['../../assets/pic1.jpg','../../assets/pic.jpg'] },
    {id:1,name:'java',summary:'this is java project',description:'this is shsgddhg',projectLink:'https://github.com/ysathish',tags:[Tag.Java],pictures:['../../assets/pic.jpg','../../assets/pic1.jpg'] },
    {id:2,name:'python',summary:'this is python project',description:'this is shsgddhg',projectLink:'https://github.com/ysathish',tags:[Tag.Python],pictures:['../../assets/pic1.jpg','../../assets/pic.jpg'] },
    {id:3,name:'web app',summary:'this is web app project',description:'this is shsgddhg',projectLink:'https://github.com/ysathish',tags:[Tag.Web],pictures:['../../assets/pic.jpg','../../assets/pic1.jpg'] },

  ];

  constructor() { }
  getProject(){
    return this.projectName;
  }
  getProjectById(id:number):Project{
let project=this.projectName.find(project => project.id===id);
if(project===undefined){
  throw new TypeError('there is no project that match the  id'+id);
}
return project;

  }
  getProjectByFilter(filtertags:Tag[]){
    let filterProjects:Project[]=[];
    this.projectName.forEach(function (project){
      let foundAll=true;
      filtertags.forEach(function(filtertags){
        if(project.tags.includes(filtertags)===false){
          foundAll=false;
        }
      });
      if(foundAll){
        filterProjects.push(project);
      }
    });
    return filterProjects;
  }
}
