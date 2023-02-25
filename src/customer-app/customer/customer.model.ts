import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

// Create -> create the validation object (tree) model
// Connect -> connect the validation to the UI
// Check -> IsValid, IsDirty

export class CustomerModel {
    Id: number = 0;
    CustomerCode: string = '';
    CustomerName: string = '';
    CustomerAmount: number = 0;

    formCustomerGroup: FormGroup; // create object of FormGroup

    constructor() {
        var _builder = new FormBuilder();
        this.formCustomerGroup = _builder.group({}); // use the builder to create

        // form control -> validation
        // 1 control -> 1 validation
        this.formCustomerGroup.addControl("CustomerNameControl",
            new FormControl('', Validators.required));

        // apply multiple validations on CustomerCode Control
        const validationCollection = [];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern('^[0-9]{4,4}$'));

        this.formCustomerGroup.addControl("CustomerCodeControl",
            new FormControl('', Validators.compose(validationCollection)));
    }

}