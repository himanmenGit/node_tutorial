// // var와 const의 차이
// if (true) {
//   var x = 3;
// }
// // block scope를 무시
// console.log(x);

// function a() {
//   var x = 3;
// }
// // Error
// // console.log(x)

// if (true) {
//   const y = 3;
// }
// // Error
// // console.log(y);

// // const와 let의 차이
// const a1 = 3;
// //Error
// //a = '5';

// const b = { name: "zerocho" };
// // 가능
// b.name = "nerocho";

// // let으로 사용하면 값을 바꿀 수 있다.
// let c = 5;
// c = 3;
// c = 10;

// // 이전 객체 리터럴

// var node = function () {
//   console.log("node");
// };
// var es = "ES";
// var old = {
//   js: function () {
//     console.log("js");
//   },
//   node: node,
// };
// old[es + 6] = "Fantastic";
// old.js();
// old.node();
// console.log(old.ES6);

// // 새로운 객체 리터럴

// const newob = {
//   js() {
//     console.log("js");
//   },
//   node,
//   [es + 6]: "Fantastic",
// };
// newob.node();
// newob.js();
// console.log(newob.ES6);

// // 화살표 함수
// function add1(x, y) {
//   return x + y;
// }

// const add2 = (x, y) => {
//   return x + y;
// };

// const add3 = (x, y) => x + y;

// const add4 = (x, y) => x + y;

// function not1(x) {
//   return !x;
// }

// const not2 = (x) => !x;

// const obj1 = (x, y) => {
//   return { x, y };
// };
// const obj2 = (x, y) => ({ x, y });

// var relationship1 = {
//   name: "zero",
//   friends: ["nero", "hero", "xero"],
//   logFriends: function () {
//     this.friends.forEach(function (friend) {
//       console.log(this.name, friend);
//     });
//   },
// };
// relationship1.logFriends();

// var relationship2 = {
//   name: "zero",
//   friends: ["nero", "hero", "xero"],
//   logFriends: function () {
//     this.friends.forEach((friend) => {
//       console.log(this.name, friend);
//     });
//   },
// };
// relationship2.logFriends();

// 필요한 경우
// GamepadButton.addEventListener("click", function () {
//   console.log(this.textContent);
// });

// 구조분해 할당
const example = { a: 123, b: { c: 135, d: 146 } };
const a1 = example.a;
const d1 = example.b.d;

const {
  a,
  b: { d },
} = example;
console.log(a);
console.log(d);

arr = [1, 2, 3, 4, 5];
const x = arr[0];
const y = arr[1];
const z = arr[4];

const [x1, , , y1, z1] = [1, 2, 3, 4, 5];

// 클래스

// 이전 prototype
var Human = function (type) {
  this.type = type || "human";
};

Human.isHumna = function (human) {
  return human instanceof Human;
};
Human.prototype.breathe = function () {
  alert("h-a-a-am");
};
var Zero = function (type, firstName, lastName) {
  Human.apply(this, arguments); // 상속을 위함
  this.firstName = firstName;
  this.lastName = lastName;
};
Zero.prototype = Object.create(Human.prototype); // 상속을 위함
Zero.prototype.constructor = Zero; // 상속위함
Zero.prototype.sayName = function () {
  alert(this.firstName + " " + this.lastName);
};
var oldZero = new Zero("Human", "Zero", "Hero");
console.log(Human.isHumna(oldZero));

// 새거
class Human2 {
  constructor(type = "human") {
    this.type = type;
  }
  static isHumna(human) {
    return human instanceof Human2;
  }
  breathe() {
    console.log("h-a-a-a-m");
  }
}

class Zero2 extends Human2 {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayName() {
    super.breathe();
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero2("Human", "Zero", "Hero");
console.log(Human2.isHumna(newZero));
newZero.sayName();
newZero.breathe();

// 프로미스
const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// 콜백 3중첩을 프로미스로

//콜백
function findAndSaveUser(Users) {
  Users.findOne({}, (err, user) => {
    // 첫 번째 콜백
    if (err) {
      return console.error(err);
    }
    user.name = "zero";
    user.save((err) => {
      // 두 번째 콜백
      if (err) {
        return console.error(err);
      }
      Users.findOne({ gender: "m" }, (err, user) => {
        // 세 번째 콜백
        //생략
      });
    });
  });
}

//프로미스
function findAndSaveUserPromise(Usesr) {
  Users.findOne({})
    .then((user) => {
      user.name = "zero";
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: "m" });
    })
    .then((user) => {
      //생략
    })
    .catch((err) => {
      console.error(err);
    });
}

// Promise all

const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공2");
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // ['성공1', '성공2']
  })
  .catch((err) => {
    console.error(err);
  });

// async/await

async function findAdnSaveUsers(Users) {
  let user = await Users.findOne({});
  user.name = "zero";
  user = await user.save();
  user = await Users.findOne({ gender: "m" });
  //생략
}

//asrrow function
// try/catch
const findAndSaveUser = async (Users) => {
  try {
    let user = await Users.findOne({});
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
    //생략
  } catch (error) {
    console.log(error);
  }
};

//for awatit (변수 of 프로미스 배열)
const promise3 = Promise.resolve("성공3");
const promise4 = Promise.resolve("성공4");
async () => {
  for await (promise of [promise3, promise4]) {
    console.log(promise);
  }
};
