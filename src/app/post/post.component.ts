import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  // static: true if used in ngOnInit only
  @ContentChild('info',{static: true}) infoRef: ElementRef;
  constructor() {}

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement)
  }
}
