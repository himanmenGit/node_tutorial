console.log(this);
console.log(module.exports);
console.log(this === module.exports);

function a() {
  console.log(this);
  console.log(this === global);
}
a();
