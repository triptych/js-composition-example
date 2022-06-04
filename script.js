class Parent {
  constructor(name, someval){
    this.name = name;
    this.value = someval;
  }

  sayName(){
    console.log(`I said ${this.name}`);
    
  }
}

class Child extends Parent{
  constructor(name,someval,notherval){
    super(name,someval)
    this.nother = notherval;
    
  }
  saySomething(){
    console.log(`I'm ${this.name} and I say ${this.nother}`)
  }
}

const eater = (state) => ({
  eat(amount){
    console.log(`${state.name} is eating`);
    state.energy += amount;
    
    
  }
})

function ComposedItem(name,someval,notherval,energy){
  let composedItem = {
    name,
    someval,
    notherval,
    energy
  }
  return Object.assign(
    composedItem,
    eater(composedItem)
  )
}