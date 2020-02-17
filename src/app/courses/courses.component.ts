import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'list of courses';
  courses = ['course1', 'course2'];
  isActive = true;
  backgroundColor = 'Green';
  constructor() { }

  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('Enter was Pressed');
    }
  }
  onKeyUpFiltered($event)
  {
    console.log('Enter was Pressed');
    console.log($event.target.value);
  }
  onKeyUpFilteredVariable(email)
  {
    console.log('Enter was Pressed');
    console.log(email);
  }
  onSave($event) {
    $event.stopPropagation();
    console.log('butoon was clicked', $event);

  }
  onDivClicked($event) {
    console.log('Div was clicked');
  }
  ngOnInit(): void {
  }

}
