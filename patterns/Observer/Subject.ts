import { ObserverInterface } from './Interfaces/ObserverInterface'

class Subject {
  private observers: ObserverInterface[];

  constructor() {
    this.observers = []
  }

  public attach (observerName:string, callback:() => void):void {
    this.observers.push({
        name: observerName,
        callback
      });
  }

  public detach (observerName:string):void {
    this.observers = this.observers
      .filter(observer => observer.name !== observerName);
  }

  public notify (observerName:string):void {
    this.observers
      .filter(observer => observer.name === observerName)
      .map(o => o.callback());
  }
}
