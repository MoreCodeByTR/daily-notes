class Publisher {
  constructor() {
    this.watcher = [];
  }

  listen(fn) {
    this.watcher.push(fn);
  }

  emit() {
    this.watcher.forEach((fn) => {
      fn();
    });
  }
  off(fn) {
    this.watcher = this.watcher.filter((item) => item.name !== fn.name);
  }
}

let school = new Publisher();

const eat = () => {
  console.log('吃饭');
};

const wash = () => {
  console.log('刷牙');
};

const sleep = () => {
  console.log('睡觉');
};

school.listen(eat);
school.listen(wash);
school.listen(sleep);
school.emit();

school.off(wash);
school.emit();
