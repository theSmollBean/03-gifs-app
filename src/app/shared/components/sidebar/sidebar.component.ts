import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifService: GifsService){}

  public get tags(){
    return this.gifService.tagHistory;
  }

  public getGifs(tag: string): void{
    console.log("Etiqueta: ", tag)
    this.gifService.searchTag(tag);
  }


}
