const request = require('superagent');
const cheerio = require('cheerio');

const URL = 'http://wufazhuce.com/';

const messageSelect = '#carousel-one > div > div:nth-child(1) > div.fp-one-cita-wrapper > div.fp-one-cita > a';
const imageSelect = '#carousel-one > div > div:nth-child(1) > a > img';

module.exports = function getDataFromOne() {
  return request.get(URL).then((res) => {
    const html = res.text;
    const $ = cheerio.load(html);
    const message = $(messageSelect).text();
    const img = $(imageSelect).attr('src');
    return { message, img };
  });
};
