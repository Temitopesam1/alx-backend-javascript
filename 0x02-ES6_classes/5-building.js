export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
  
}


// Another way to do this that I figured after submission

//export default class Building {
//    constructor(sqft) {
//        this._sqft = sqft;

//    }

//    get sqft() {
//        return this._sqft;
//    }

//    set sqft(newSqft){
//        if (typeof(newSqft) === 'number'){
//            this._sqft = newSqft;
//        }
//        else {
//            throw new Error('Name must a number')
//        }
//    }

//    evacuationWarningMessage() {
//        if (this.evacuationWarningMessage !== 'function') {
//            throw Error('Class extending Building must override evacuationWarningMessage')
//        }
//    }
//}


