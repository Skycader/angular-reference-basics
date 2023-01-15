import { Component } from '@angular/core';
import { AppCounterService } from './services/counter.service';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppCounterService]
})
export class AppComponent {

  value: string = ""
  time = new Date()
  posts: Post[] = [
    {title: 'They say ducks are spying on people',text: 'Quck quack', id: 1},
    {title: 'What are cats hiding?',text: 'Your food', id: 2}
  ]
  title = 'angular-module-2';
  constructor (protected appCounterService: AppCounterService) {}
  updatePosts(post: Post) {
    this.posts.unshift(post)
    console.log('New post: ',post)
  }

  ngOnInit() {
    setInterval(()=>{this.time = new Date()},1000)
  }
}

