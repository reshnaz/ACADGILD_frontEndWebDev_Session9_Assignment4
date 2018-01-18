import { Component, OnInit } from '@angular/core';
import { PersonModel, PersonList } from './interface/person-model';
import { Mrms } from './interface/mrms';
import { PersonService } from './service/person.service';
import { PersonDropdownService } from './service/person-dropdown.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService, PersonDropdownService]
})
export class AppComponent implements OnInit {

  // Necessary variable declarations which will be used in html
  personModel: PersonModel;
  personList: PersonList;

  personArr: PersonList[] = [];
  mrms: Mrms[] = [];

  // Using constructor, call the PersonService and PersonDropdownService.
  constructor(private _personService: PersonService, private _dropDownService: PersonDropdownService) { }

  ngOnInit() {
    this.personModel={
      honorific:'',
      firstName:'',
      lastName:'',
      age:null
    };
    this.mrms=this._dropDownService.getHonorific();
  }

  // This function is called from html which in turn calls the functions in our Person service.
  addPerson(vals) {

    // Assign input values to interface variables.
    this.personList = {
      honorific: vals.honorific,
      firstName: vals.firstName,
      lastName: vals.lastName,
      age: vals.age
    }

    // Service function called to add person details to array
    this._personService.addPerson(this.personList);

    // Service function called to return updated person array.
    this.personArr=this._personService.getPerson();
  }
}
