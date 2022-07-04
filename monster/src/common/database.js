export const reguArr = [
  {
    key: '验证邮箱格式',
    value: `example：onkeyup="value=value.replace(/^([a-zA-Z0-9]+[_|\\_|+(*)\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\\..[a-zA-Z]{2,3}$/, '')"`
  },
  {
    key: '只允许输入英文',
    value: `example：onkeyup="value=value.replace(/[^a-zA-Z]+$/g, '')"`
  },
  {
    key: '只允许输入数字',
    value: `example：onkeyup="value=value.replace(/[^\\d]/g,'')"`
  },
  {
    key: '只允许输入中英文',
    value: `example：onkeyup="value=value.replace(/[^/a-\z\\A-\\Z\\u4E00-\\u9FA5]+$/g, '')"`
  },
  {
    key: '只允许输入中英文数字',
    value: `example：onkeyup="value=value.replace(/[^\\u4e00-\\u9fa5\\a-zA-Z0-9]+$/g, '')"`
  },
  {
    key: '只允许输入正整数和小数',
    value: `example：onkeyup="value=value.replace(/[^\\d^\\.]+/g,'')"`
  },
  {
    key: '只允许输入整数和指定位数的小数',
    value: `example：onkeyup="value=value.replace(/^\\D*(\\d*(?:\\.\\d{0,6})?).*$/g, '$1')"`
  },
]