module.exports = {
  mailOptions: {
    from: '', // 发送者昵称和地址
    to: '', // 接收者的邮箱地址
    subject: ''
  },
  clientOption: {
    service: 'QQ',
    port: 465, // SMTP 端口
    secureConnection: true, // SSL安全链接
    auth: {
      user: '', //账户
      pass: '' //smtp授权码，到邮箱设置下获取
    }
  }
};
