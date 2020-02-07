import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormControlName, FormGroup, FormControl } from '@angular/forms';
import { MDBDatePickerComponent, CompleterData, CompleterService } from 'ng-uikit-pro-standard';
import { JournalistService } from 'src/app/services/journalist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journalist-sign-up',
  templateUrl: './journalist-sign-up.component.html',
  styleUrls: ['./journalist-sign-up.component.scss']
})
export class JournalistSignUpComponent implements OnInit {
  //public initialValueDataService: CompleterData;
  registerForm:FormGroup;
  emailFormEx: FormControl;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  optionsSelect: Array<any>;
  model: any;
  loading = false;
    submitted = false;
    error: string;
    constructor(public completerService: CompleterService,
      private fb: FormBuilder,
      private journalistService:JournalistService,
      private router: Router,
      ) {
      //this.initialValueDataService = completerService.local(this.initialValueSearchData, 'color', 'color');
     
      this.initialValueDataService=completerService.local(this.initialValueSearchData,'color','color')
     }

  ngOnInit() {

    this.registerForm=this.fb.group({
      orangeFormuserName: ['', Validators.required],
      orangeFormEmail: ['', [Validators.required, Validators.email]],
      orangeFormPass: ['', [Validators.required, Validators.minLength(8)]],
      orangeFormentreprise:['', Validators.required],
      motivationFormMessage:['', [Validators.required,Validators.minLength(30)]],
      birthCalendar:['', Validators.required],
      nomFormName: ['', [Validators.required, Validators.minLength(2)]],
      prenomFormName: ['', [Validators.required, Validators.minLength(4)]],
      phoneFormName:['', Validators.required],
      xpNumFormName:['', Validators.required],
      selectForm:['',Validators.required]
    });

    this.optionsSelect = [
      {value:'Tunisia', label: 'Tunisia' },
      { value:'Senegal',label: 'Senegal' },
      { value:'Angola',label: 'Angola' },
      { value:'Nigeria',label: 'Nigeria' },
      { value:'Tchad',label: 'Tchad' },
      { value:'Mali',label: 'Mali' },
      { value:'Burkina Faso', label: 'Burkina Faso' },
    ];
  }
  public initialValueSearchData = [
    { color: 'Tunisia' },
    { color: 'Senegal' },
    { color: 'Angola' },
    { color: 'Nigeria' },
    { color: 'Tchad' },
    { color: 'Mali' },
    { color: 'Burkina Faso' },
  ];
  public initialValueDataService:CompleterData;
  public initialValueSearchStr: string = this.initialValueSearchData[0].color;

  //phoneNumber = "/^(([\+]{1}[0-9]{1,3}[\ ]{1}[0-9]{1,2}[\ ]{1}[0-9]{4}[\ ]{1}[0-9]{4})|([0]{1}[0-9]{1}[\ ]{1}[0-9]{4}[\ ]{1}[0-9]{4})|([0]{1}[0-9]{1}[\-]{1}[0-9]{4}[\-]{1}[0-9]{4})|([\(]{1}[0]{1}[0-9]{1}[\)]{1}[\ ]{1}[0-9]{4}([\ ]|[\-]){1}[0-9]{4})|([0-9]{4}([\ ]|[\-])?[0-9]{4})|([0]{1}[0-9]{3}[\ ]{1}[0-9]{3}[\ ]{1}[0-9]{3})|([0]{1}[0-9]{9})|([\(]{1}[0-9]{3}[\)]{1}[\ ]{1}[0-9]{3}[\-]{1}[0-9]{4})|([0-9]{3}([\/]|[\-]){1}[0-9]{3}[\-]{1}[0-9]{4})|([1]{1}[\-]?[0-9]{3}([\/]|[\-]){1}[0-9]{3}[\-]{1}[0-9]{4})|([1]{1}[0-9]{9}[0-9]?)|([0-9]{3}[\.]{1}[0-9]{3}[\.]{1}[0-9]{4})|([\(]{1}[0-9]{3}[\)]{1}[0-9]{3}([\.]|[\-]){1}[0-9]{4}(([\ ]?(x|ext|extension)?)([\ ]?[0-9]{3,4}))?)|([1]{1}[\(]{1}[0-9]{3}[\)]{1}[0-9]{3}([\-]){1}[0-9]{4})|([\+]{1}[1]{1}[\ ]{1}[0-9]{3}[\.]{1}[0-9]{3}[\-]{1}[0-9]{4})|([\+]{1}[1]{1}[\ ]?[\(]{1}[0-9]{3}[\)]{1}[0-9]{3}[\-]{1}[0-9]{4}))$/";

 
   get f() { return this.registerForm.controls; }

   onSubmit(){
     this.submitted=true;

    
    this.journalistService.signUp(this.registerForm.value).subscribe(
      data=>{
        this.router.navigate(['/login'], { queryParams: { registered: true }});
    },
    error=>{
      this.error = error;
      this.loading = false;
  });
   }

}
