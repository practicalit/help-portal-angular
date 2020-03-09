import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, Validator, FormArray } from '@angular/forms';
import { HelpService } from 'src/app/services/help.service';
import { Help } from 'src/app/models/Help';

@Component({
  selector: 'app-add-help',
  templateUrl: './add-help.component.html',
  styleUrls: ['./add-help.component.css']
})
export class AddHelpComponent implements OnInit {

  addHelp: FormGroup;
  submitted: Boolean = false; //initialize the form with no submission hence false
  invalidForm: Boolean = false; //initially the user hasn't submitted anything.
  message:string = null;

  //temporary hard-coded value. This has to be fetched from server.
  helpType = [
    { id: 1, title: 'Money' },
    { id: 2, title: 'Advice' },
    { id: 3, title: 'Consultation' }
    ];

  //temporary hard-coded value. this has to be fetched from server.
  categories = [
    { id: 1, title: 'Education' },
    { id: 2, title: 'Family' },
    { id: 3, title: 'Auto' }, 
    { id: 4, title: 'Relation' },
    { id: 5, title: 'Adjusting' },
    { id: 6, title: 'Children' },
    { id: 7, title: 'Assylum' }
  ];

  constructor(private formBuilder:FormBuilder, private helpService: HelpService) { }

  ngOnInit() { 
    this.addHelp = this.formBuilder.group({
      title: ['', Validators.required],
       message: ['', Validators.required],
       typeOfHelp: new FormArray([]),
       category: ['', Validators.required]
     });
     this.addCheckboxes();
  }

  /**
   * Populate the checkboxes.
   */
  private addCheckboxes() {
    this.helpType.forEach((o, i) => {
    const control = new FormControl(i === 0); // if first item set to true, else false
    (this.addHelp.controls.typeOfHelp as FormArray).push(control);
    });
  }
  
  /**
   * Method to be called when the user submits the help create form
   */
  onSubmit() {
    this.submitted = true;

    //check if all the mandatory values are provided.
    if (this.addHelp.invalid) {
      this.invalidForm = true;
      this.message = "Please check if you have provided all the values";
      return;
    }

    const typeOfHelpNeeded = this.addHelp.value.typeOfHelp
      .map((v, i) => v ? {"id": this.helpType[i].id} : null)
      .filter(v => v !== null);
    
    let help:Help = new Help();//create the object to be sent to server.
    help.title = this.addHelp.controls.title.value;
    help.message = this.addHelp.controls.message.value;
    help.helpType = typeOfHelpNeeded;
    help.categories = [{"id": this.addHelp.controls.category.value}];//formalize

    /*
     * send the request and wait for the update.
     */
    this.helpService.createHelp(help).subscribe(
      help => {
        this.invalidForm = false;
        if (help.success) {
          this.message = "You have successfully created the help topic. Good luck!"
        }
        console.log(help);
      }
    );
  }
}
