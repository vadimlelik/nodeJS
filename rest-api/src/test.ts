<<<<<<< HEAD
function Component(id: number) {
    console.log('init Component')
    return (target: Function) => {
        console.log('run Component')
        target.prototype.id = id
    }
}

function Logger() {
    console.log('init Logger')
    return (target: Function) => {
        console.log('run Logger ')
    }
}


function Method(
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
) {
    console.log(propertyKey)
    const oldValue = propertyDescriptor.value
    propertyDescriptor.value = function (...arg: any[]) {
        return arg[0] * 10
    }
}

function Prop(target: Object, propertyKey: string) {
    let value: number
    const getter = () => value
    const setter = (newValue: number) => value = newValue

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    })
}

function Param(target: Object, propertyKey: string, index: number) {
    console.log(target)
    console.log(propertyKey)
    console.log(index)
}

@Component(1)
@Logger()
export class User {
    @Prop id: number;

    @Method
    update(@Param newId: number) {
        this.id = newId
        return this.id
    }
}

console.log(new User().id)
console.log(new User().update(2))
=======
function Component(target: Function) {
  console.log(target);
}

export class User {
  id: number;

  update(newId: number) {
    this.id = newId;
    return this.id;
  }
}

console.log(new User().id);
>>>>>>> 4fc1f2f (inversify)
