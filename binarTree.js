class MyQueue {
    constructor() {
      this.storage = Array();
      this.head = 0;
    }
  
    enqueue(item) {
      this.storage[this.head] = item;
      this.head++;
    }
  
    dequeue() {
      if (this.head === 0) return;
  
      const first = this.storage[0];
  
      for (let i = 0; i < this.head - 1; i++) {
        this.storage[i] = this.storage[i + 1];
      }
      this.head--;
      return first;
    }
  
    isEmpty() {
      return this.head === 0;
    }
  
    maxItemInQueue() {
      if (this.head === 0) return;
      let max = this.storage[0];
      for (let i = 1; i < this.head; i++) {
        if (this.storage[i] > max) {
          max = this.storage[i];
        }
      }
      return max;
    }
  
    peek() {
      if (this.head === 0) return;
      return this.storage[0];
    }
  }
  
  class Human {
    constructor(name) {
      this.name = name
      this.father = null
      this.mother = null
    }
  }
  
  class Tree {
    constructor(human) {
      this.human = human
      this.queue = new MyQueue()
    }
  
  
    collect(){
  
      this.queue.enqueue(this.human)
      let names = []
      let count = 0
  
      while (this.queue.isEmpty() !== true) {
  
        let current = this.queue.dequeue()
        
        names.push(current.name)
        
  
        if (current.father !== null) {
          this.queue.enqueue(current.father)
          names.push(count+1)
        }
  
        if (current.mother !== null) {
          this.queue.enqueue(current.mother)
          names.push(count+1)
        }
  
      }
  
      return names
    }
  
  
  
  }
  
  
  
  let me = new Human('Mia')
  
//   let dad = new Human('Kyal')
//   let mom = new Human('Munara')
  me.father = dad
  me.mother = mom
  
  // let dadGrandpa = new Human('Kurmanbek')
  let dadgGrandma = new Human('Sonun')
  let momGrandpa = new Human('Chyntemir')
  let momgGrandma = new Human('Erkin')
  // me.father.father = dadGrandpa
  me.father.mother = dadgGrandma
  me.mother.father = momGrandpa
  me.mother.mother = momgGrandma
  
  
  const myTree = new Tree(me)
  const myData = myTree.collect()
  console.log(myData);

  ////////////////////////
  //obxod binar tree

  class Node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  let me = new Node('1')
  
  let dad = new Node('11')
  let mom = new Node('12')
  me.left = dad
  me.right = mom
  
  let n11 = new Node('111')
  let n12 = new Node('112')
  let n111 = new Node('121')
  let n112 = new Node('122')
  me.left.left = n11
  me.left.left = n12
  me.right.left = n111
  me.right.right = n112
  
  n11.right = new Node('Eliz')
  
  class Traversal {
    constructor() {
      this.preOrder = (root, sp = "") => {
        if (root !== null) {
          console.log(`${sp}${root.value}`);
          if (root.right !== null) PreOrder(root.right, sp + "  ")
          if (root.left !== null) PreOrder(root.left, sp + "  ")
        }
      }
  
      this.st = "";
      this.preOrder2 = (root) => {
        if (root !== null) {
          this.st += `${root.value}`;
          if (root.right !== null || root.left !== null) {
            this.st += '(';
            if (root.right !== null) this.preOrder2(root.right)
            else this.st += 'null';
            this.st += ',';
  
            if (root.left !== null) this.preOrder2(root.left)
            else this.st += 'null';
            this.st += ')';
          }
        }
        return this.st;
      }
    }
  }
  
  
  let tr = new Traversal();
  let res1 = tr.preOrder2(me);
  let res2 = tr.preOrder2(me);
  
  console.log(res2);