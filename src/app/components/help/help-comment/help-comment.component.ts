import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-help-comment',
  templateUrl: './help-comment.component.html',
  styleUrls: ['./help-comment.component.css']
})
export class HelpCommentComponent implements OnInit {

  /*
   * This is the id of the help detail tha comes from the parent
   * you can now have the id that you will use to send to the server.
   * For the new component of the comment, the only thing you will miss is the 
   * id of the help and now you have it locally as helpId.
   * 
   * You can then do whatever you want with it. You can collect the comment
   * and then send it to the server along with helpId
   */
  @Input() helpId: number;
  constructor() { }

  ngOnInit() {
  }

}
