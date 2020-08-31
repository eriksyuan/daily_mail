const nodemailer = require('nodemailer'); //发送邮件的node插件
const { mailOptions, clientOption } = require('../config');

module.exports = function sendMail(html) {
  if (mailOptions && clientOption) {
    let transporter = nodemailer.createTransport(clientOption);
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
  } else {
    throw new Error('请设置发送方参数 config---clientOption');
  }
};
