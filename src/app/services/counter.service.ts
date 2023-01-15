import { Injectable } from "@angular/core"


export class AppCounterService {
  count = 0
  increase() {
  this.count++
  }
  decrase() {
    this.count--
  }
}