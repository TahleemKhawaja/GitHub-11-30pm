// let btn = document.getElementById('Click');
// btn.addEventListener('click', (event) => {
//   console.log(event.type);
// });

// let input = document.getElementById('name');
// input.addEventListener('change', (event) => {
//   console.log(event.target.value);
// });

// const num = 11;
// const NewProm = new Promise((resolve, reject) => {
//   if (num % 2 === 0) {
//     resolve('Even');
//   } else {
//     reject('not even');
//   }
// });

// NewProm.then((x) => console.log(x)).catch((err) => console.log(err));

// fetch('')
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
try {
  const Fetch = async () => {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
  };
  Fetch();
} catch (error) {
  console.log(error);
}

// async function name(params) {

// }
