import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
onNavigate() {
  window.open('https://github.com/Eli-Smith')
}
onNavigate1() {
  window.open('https://www.linkedin.com/in/elijah-smith-092198144/')
}
onNavigate2() {
  window.open('https://github.com/kerv91')
}
onNavigate3() {
  window.open('https://www.linkedin.com/in/karina-rodriguez-3454a594/')
}
onNavigate4() {
  window.open('https://github.com/jhiggins3231')
}
onNavigate5() {
  window.open(' https://www.linkedin.com/in/jhiggins3231/')
}
}
