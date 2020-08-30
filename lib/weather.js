const request = require('superagent');
const cheerio = require('cheerio');
const URL = 'http://www.weather.com.cn/weather/101210106.shtml';

const wetherSelect = '#7d  > ul';

module.exports = function getWether() {
  return request.get(URL).then((res) => {
    const html = res.text;
    const $ = cheerio.load(html);
    return $(wetherSelect)
      .children()
      .filter((index) => index < 3)
      .map((index, ele) => {
        const $e = cheerio.load(ele);
        const item = {
          date: $e('h1').text(),
          wether: $e('p.wea').text(),
          icon: $e('big')
            .map((i, e) => e.attribs['class'])
            .toArray(),
          temperatures: $e('p.tem').text()
        };
        return item;
      })
      .toArray();
  });
};
