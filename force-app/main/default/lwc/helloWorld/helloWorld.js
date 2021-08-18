/**
 * Created by mocan on 29/03/2021.
 */

import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}