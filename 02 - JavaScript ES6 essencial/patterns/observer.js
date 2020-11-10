class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter((subscriber) => subscriber !== f);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

const obs = new Observable();

const logData1 = (data) => console.log('subscribe1', data);
const logData2 = (data) => console.log('subscribe2', data);
const logData3 = (data) => console.log('subscribe3', data);

obs.subscribe(logData1);
obs.subscribe(logData2);
obs.subscribe(logData3);

obs.notify({ name: 'William' });
obs.unsubscribe(logData2);
obs.notify({ name: 'William' });
