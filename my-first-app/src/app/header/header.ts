import { Component , input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
   // Inputs: values this component receives from its parent.
  fullName = input.required<string>();
  location = input.required<string>();
  email = input.required<string>();
  phone = input.required<string>();
  profile = input.required<string>();
}
