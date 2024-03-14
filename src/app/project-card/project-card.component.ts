import { Component, Input } from '@angular/core';
import { Project } from '../_models/project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModelComponent } from '../project-model/project-model.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input()
   projectName ={} as Project;
  bsModelRef?:BsModalRef;
  constructor(private modelService:BsModalService){}
  openProjectModel(){
    const modalOptions :ModalOptions={
      class:"model-lg",
      initialState:{
        projectName:this.projectName
        
      }
    }
    this.bsModelRef=this.modelService.show(ProjectModelComponent, modalOptions)
  }

}
