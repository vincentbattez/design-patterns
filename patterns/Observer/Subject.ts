import { ObserverInterface } from './ObserverInterface'

class Subject {
  private observers: ObserverInterface[];

  constructor() {
    this.observers = []
  }

  attach (observerName:string, callback:() => void) {
    this.observers.push({
        name: observerName,
        callback
      });
  }

  detach (observerName:string) {
    this.observers = this.observers
      .filter(observer => observer.name !== observerName);
  }

  notify (observerName:string) {
    this.observers
      .filter(observer => observer.name === observerName)
      .map(o => o.callback());
  }
}
