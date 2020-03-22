import { Component, OnInit } from '@angular/core';
import { HelpService } from 'src/app/services/help.service';
import { Help } from '../../models/Help';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  helps: Help[];
 
  constructor(
    private helpService: HelpService) { }

  ngOnInit() {
    let today = new Date();
    this.helpService.getHelps().subscribe(helps => {
        console.log(helps);
        this.helps = helps;
      }
    );
  }

  /**
   * Function to get the first n (where n could be 10, 20, 14..)
   * from the given string.
   * 
   * @param size
   * @param content
   * @return result: string
   */
  getFirstWords(size: number, content: string) {
    if (size == 0 || content == null || content.length == 0 || content == "" ) {
      return "";
    }

    /*
     * First split the words by space. Then take only the 'size' amount
     * from the array. Then join the content of the array using join
     */
    let seeMore = "";
    let words = content.split(" ");
    if (words.length > size) {
      seeMore = "...";
    }
    return words.slice(0, size).join(" ") + seeMore;
  }
  
}
