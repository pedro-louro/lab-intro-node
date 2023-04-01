class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }

    return this.items[pos]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.items.length - 1]

    // let highest = 0;
    // this.items.forEach(item => {
    //   if (item > highest) {
    //     highest = item;
    //   }
    // })
    // return highest;
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    this.items.sort((a, b) => a - b)
    return this.items[0]

  }

  sum() {
    return this.items.reduce((acc, current) => acc + current, 0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    
    return (this.items.reduce((acc, current) => acc + current, 0) / this.items.length)

  }
}

module.exports = SortedList;
