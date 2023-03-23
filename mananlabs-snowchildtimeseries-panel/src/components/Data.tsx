const startTime = new Date(2023, 1, 1, 5, 0); // year, month (0-11), day, hour (0-23), minute (0-59)
const endTime = new Date(2023, 1, 1, 5, 5);
let timeData: String[] = [];
for (let i = startTime.getTime(); i <= endTime.getTime(); i += 60000) {
  let time = new Date(i);
  timeData.push(time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes());
}

const startTimeTwo = new Date(2023, 1, 1, 5, 6); // year, month (0-11), day, hour (0-23), minute (0-59)
const endTimeTwo = new Date(2023, 1, 1, 5, 10);
let timeDataTwo: String[] = [];
for (let i = startTimeTwo.getTime(); i <= endTimeTwo.getTime(); i += 60000) {
  let time = new Date(i);
  timeDataTwo.push(time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes());
}

export { timeData };
