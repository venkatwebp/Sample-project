import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  courses = [
    {
      id: 0,
      name: 'React',
      imagePath: 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png',
      version: 'Vesion : 7',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 1,
      name: 'Angular',
      imagePath: 'https://www.levelaccess.com/wp-content/uploads/2015/08/AngularJS_google.png',
      version: 'Vesion : 14',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 2,
      name: 'Vue',
      imagePath: 'https://miro.medium.com/max/720/1*OrjCKmou1jT4It5so5gvOA.jpeg',
      version: 'Vesion : 3',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 3,
      name: 'Javascript',
      imagePath: '../assets/js.png',
      version: 'Vesion : 12',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 4,
      name: 'Jquery',
      imagePath: '../assets/jquery.png',
      version: 'Vesion : 7',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 5,
      name: 'MongoDB',
      imagePath: '../assets/mongodb.png',
      version: 'Vesion : 14',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    }
  ]

  constructor() { }
}
