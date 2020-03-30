import { Component, OnInit } from '@angular/core';
import { HelpService } from 'src/app/services/help.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-help-description',
  templateUrl: './help-description.component.html',
  styleUrls: ['./help-description.component.css']
})
export class HelpDescriptionComponent implements OnInit {
  
  id: number;
  detail: any;

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
  trackByFunction(index, item) {
    return index;
  }
}
