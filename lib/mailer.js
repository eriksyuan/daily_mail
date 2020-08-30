const nodemailer = require('nodemailer'); //发送邮件的node插件

let transporter = nodemailer.createTransport({
  service: 'QQ',
  port: 465, // SMTP 端口
  secureConnection: true, // SSL安全链接
  auth: {
    user: 'eriksyuan94@qq.com', //账户
    pass: 'ofpimfrfrvewbfhh' //smtp授权码，到邮箱设置下获取
  }
});

let mailOptions = {
  from: '"哥哥" <eriksyuan94@qq.com>', // 发送者昵称和地址
  to: '15168290161@163.com', // 接收者的邮箱地址
  subject: '一封暖暖的小邮件' // 邮件主题
};

module.exports = function sendMail(html) {
  //发送邮件
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        ...mailOptions,
        html
      },
      (error, info) => {
        if (error) {
          reject(error);
        }
        resolve(info);
      }
    );
  });
};
