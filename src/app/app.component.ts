import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'They say ducks are spying on people',text: 'Quck quack', id: 1},
    {title: 'What are cats hiding?',text: 'Your food', id: 2}
  ]
  title = 'angular-module-2';

  updatePosts(post: Post) {
    this.posts.unshift(post)
    console.log('New post: ',post)
  }
}

