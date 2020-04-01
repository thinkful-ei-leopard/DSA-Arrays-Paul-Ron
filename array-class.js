const memory = require('./memory');

class Array {
  constructor() {
    this.length = 0;  // length of our array
    this.ptr = memory.allocate(this.length); // pointer to memory blocks
    this._capacity = 0; // PRIVATE - how many items memory can hold before needing to resize
  }

  push(value) {
    // push needs to increase the size of memory if the length is greater than the the capacity
    if(this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO); 
    }
    // pass our value into memory (or set)
    memory.set(this.ptr + this.length, value);
    // increase the length of this.length locally (so we know that our array is larger)
    this.length++;
  }

  _resize(size) { // PRIVATE
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size); 
    if (this.ptr === null) {
      throw new Error ('out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    // If the index is outside of the bounds of the array
    if (index < 0 || index >= this.length) {
      throw new Error ('index error');
    }
    return memory.get(this.ptr + index); // why do we have to return?
  }
  
  pop(){
    if(this.length === 0) {
      throw new Error('index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    // reduce the size our array is. We still have the memory allocated, but it is free now
    this.length--;
    // return the deleted value
    return value;
  }

}

Array.SIZE_RATIO = 3;