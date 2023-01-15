import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filterBy',
  pure: false
})
export class FilterByPipe implements PipeTransform {

  transform(posts: Post[], search: string): Post[] {
     return posts.filter( post => {
      return post.title.toLowerCase().includes(search.toLowerCase())
      || post.text.toLowerCase().includes(search.toLowerCase())
     })
  }

}
