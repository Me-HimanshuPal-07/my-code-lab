async function dataDo() {
  const code = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  console.log(code);
}

dataDo();
