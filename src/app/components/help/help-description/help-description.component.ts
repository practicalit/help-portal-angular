import { Component, OnInit } from '@angular/core';
import { HelpService } from 'src/app/services/help.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
@Component({
  selector: 'app-help-description',
  templateUrl: './help-description.component.html',
  styleUrls: ['./help-description.component.css']
})
export class HelpDescriptionComponent implements OnInit {
  
  id: number;
  detail: any;
  saveComments:boolean = false;
  comment: string;
  resource: any;
  help: any;
  c: Comment;
  
  constructor(private helpService: HelpService, private route: ActivatedRoute) { }

  ngOnInit() {

    //the + at the front changes string to number
    this.id = +this.route.snapshot.paramMap.get('id');
    this.helpService.getHelpDetail(this.id).subscribe(
      detail => this.detail = detail     
    );
  }
  /**
   * Added for performance purposes 
   * 
   * @param @index
   * @param @item 
   */
  trackByFunction(index: any, item: any) {
    return index;
  }
  saveComment(){    
    let c = {"help":{"id":"1"}, "comment": "My Comment here","resource":{"id":1}};
    //let comments: Comment = {'help': this.help, 'comment': this.comment ,'resource':this.resource}; 
    console.log(c);    
    this.saveComments = true;
    this.helpService.postComment(this.c)
    .subscribe(
     (res) => console.log(res)   
   );  
 }
}
