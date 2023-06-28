

// fetch('https://api.github.com/users/yabluko').then(res =>{
//   return res.json();
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log('Errorr >>', err);
// })

// async function getGitData(){
//   try{

//     const response = await fetch('https://api.github.com/users/yabluko');
//     const data = await response.json();
//     console.log(data);
//   } catch(err){
//     console.log("Error ");
//   }
// }

// getGitData();
const video = document.querySelector('video');

// const myVideo = navigator.mediaDevices.getUserMedia({video : true}).then(mediaStream => {
//   video.srcObject = mediaStream;
// });
// console.log(myVideo);

// async function getUserVideo () {
//   const response = await navigator.mediaDevices.getUserMedia({video: true});
//   video.scrObject = response;
// }

// getUserVideo();

// function sleep(time){
//   return new Promise((resolve, reject) => {
//     if (time < 500){
//       reject('To few sleeping time');
//     }
//     setTimeout(() => resolve(`I was sleeping ${time}`), time );
//   });
// }

// sleep(1500).then(res => {
//   console.log(res);
//   return sleep(1000)
// }).then(res => {
//   console.log(res);
//   return sleep(500);
// }).then(res => {
//   console.log(res);
//   return sleep(200);
// }).then(res => {
//   console.log(res);
// }).catch( )
// let b = 30;

// console.log(b);

// function sleep(b){
//   return new Promise((resolve, reject) => {
//     setTimeout (resolve(`Next numer is - ${b = 40}`) ,3000);
//   });
// }

// sleep(b).then(res =>  {
//   console.log(res);
// })