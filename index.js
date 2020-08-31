const dayjs = require('dayjs');
const fs = require('fs');
const schedule = require('node-schedule');
const ejs = require('ejs');

const sendMail = require('./lib/mailer');
const getDataFromOne = require('./lib/spilderOne');
const getWether = require('./lib/weather');

const template = fs.readFileSync('./template.ejs', 'utf-8');

async function send() {
  const { message, img } = await getDataFromOne();
  const wether = await getWether();
  const today = dayjs().format('YYYY/MM/DD');
  const days = dayjs().diff(dayjs('2020-02-18'), 'day');
  const html = ejs.compile(template)({
    days,
    message,
    img,
    today,
    wether
  });
  sendMail(html).then((res) => {
    console.log(res);
  });
}

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 6)];
rule.hour = 9;
rule.minute = 30;

schedule.scheduleJob(rule, function () {
  console.log('执行');
  send();
});

console.log('项目已启动。。。');
