import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleSerive : Title,
              private renderer:Renderer2){
    this.titleSerive.setTitle('Sathish Yannapu - Resume')
  }
  downloadPDF(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/angular-resume.pdf');
    link.setAttribute('download','angular-resume.pdf');
    link.click();
    link.remove();
  }

}
