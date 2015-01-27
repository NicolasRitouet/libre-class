import {Router} from 'aurelia-router';
import {WebAPI} from './web-api';

export class App {
  static inject() { return [Router, WebAPI]; }
  constructor(router, api) {
    this.router = router;
    this.api = api;

    this.router.configure(config => {
      config.title = 'Classes';
      config.map([
        { route: '',              moduleId: 'no-selection',   title: 'Select'},
        { route: 'class/:id',  moduleId: 'class-detail' }
        ]);
      });
    }

    select(class){
      this.selectedId = class.id;
      this.router.navigate('class/' + class.id);
    }

    activate(){
      return this.api.getClassList().then(classes => {
        this.classes = classes;
      });
    }
  }
