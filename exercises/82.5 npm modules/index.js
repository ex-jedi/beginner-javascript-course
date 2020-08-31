import wait from 'waait';

async function go() {
  console.log('Going!');
  await wait(1000);
  console.log('Ending');
}

go();
