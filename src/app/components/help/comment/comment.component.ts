import { Component, OnInit, Input} from '@angular/core';
import { HelpService } from 'src/app/services/help.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  [x: string]: any;
   /*
   * This is the id of the help detail tha comes from the parent
   * you can now have the id that you will use to send to the server.
   * For the new component of the comment, the only thing you will miss is the
   * id of the help and now you have it locally as helpId.
   *
   * You can then do whatever you want with it. You can collect the comment
   * and then send it to the server along with helpId
   */
  successMessage = false;
  message = 'Thank you for Commenting Us !!!';
  comment: Comment;
  @Input() helpId: number;
  constructor(private helpService: HelpService) { }

  ngOnInit() {

  }
  sendComment() {
    this.successMessage = true;
    const comments = {help: {id: this.helpId}, comment: this.comment , resource: {IDs: this.helpId}};
    console.log(comments) ;
    this.helpService.postComment(this.id)
    .subscribe(
     (comment) => comment = comment
  );
 }

}


