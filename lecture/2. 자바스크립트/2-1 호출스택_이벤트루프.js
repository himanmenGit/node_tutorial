// 동기 코드
function first() {
  second();
  console.log("첫 번째");
}

function second() {
  third();
  console.log("두 번째");
}

function third() {
  console.log("세 번째");
}
first();
// 세 번째 -> 두 번째 -> 첫 번째

// 비동기 코드
function run() {
  console.log("3 초후 실행");
}

console.log("시작");
setTimeout(run, 3000);
console.log("끝");
// 시작 -> 끝 -> 3 초후 실행

// ex-2
function oneMore() {
  console.log("one more");
}

// setTimeout이 0초 라도 백그라운드와 태스크 큐를 거치는 이벤트 루프로 실행되어야 한다.
// promise는 then을 만나는 순간 비동기가 되어 백들라운드로 간다
function run2() {
  console.log("run run");
  setTimeout(() => {
    console.log("wow");
  }, 0);
  new Promise((resolve) => {
    resolve("hi");
  }).then(console.log);
  oneMore();
}
setTimeout(run2, 5000);
