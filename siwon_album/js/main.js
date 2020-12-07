"use strict";

// D+day part
const clockFirst = document.querySelector("#first");
const clockWedding = document.querySelector("#wedding");
const clockBaby = document.querySelector("#baby");

function getTime() {
  const firstDay = new Date("2017-10-08:00:00:00+0900");
  const now = new Date();
  // This is in milisecondsx
  const difference = new Date(now - firstDay);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockFirst.innerHTML = `D+${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

function weddingTime() {
  const weddingDay = new Date("2019-06-29:00:00:00+0900");
  const now = new Date();
  // This is in milisecondsx
  const difference = new Date(now - weddingDay);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockWedding.innerHTML = `D+${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

function babyTime() {
  const babyDay = new Date("2019-06-29:00:00:00+0900");
  const now = new Date();
  // This is in milisecondsx
  const difference = new Date(now - babyDay);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockBaby.innerHTML = `D+${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

function init() {
  getTime();
  weddingTime();
  babyTime();
  setInterval(getTime, 1000);
  setInterval(weddingTime, 1000);
  setInterval(babyTime, 1000);
}
init();

// Main images onclick-change effect
// 각각의 dday를 누르면 해당 이미지가 출력되도록
