import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  courses = [
    {
      id: 0,
      name: 'React',
      imagePath: './assets/react.png',
      version: 'Vesion : 18',
      type: 'premium',
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
      imagePath: './assets/angular.png',
      version: 'Vesion : 14',
      type: 'premium',
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
      imagePath: './assets/vue.png',
      version: 'Vesion : 3.2.47',
      type: 'premium',
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
      imagePath: './assets/js.png',
      version: 'Vesion : ES6',
      type: 'free',
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
      name: 'Node JS',
      imagePath: './assets/node.png',
      version: 'Vesion : 18.16',
      type: 'free',
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
      name: 'HTML5',
      imagePath: './assets/html5.png',
      version: 'Vesion : 5',
      type: 'premium',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 6,
      name: 'CSS3',
      imagePath: './assets/css3.png',
      version: 'Vesion : 3',
      type: 'premium',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 7,
      name: 'Adobexd',
      imagePath: './assets/adobexd.png',
      version: 'Vesion : 42.1.22',
      type: 'premium',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 8,
      name: 'Figma',
      imagePath: './assets/figma.png',
      version: 'Vesion : 14',
      type: 'premium',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 9,
      name: 'EmberJS',
      imagePath: './assets/ember.png',
      version: 'Vesion : 14',
      type: 'premium',
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
