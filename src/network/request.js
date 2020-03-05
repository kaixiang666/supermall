import axios from 'axios'
export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
     baseURL:'http://106.54.54.237:8000/api/wh',
     timeout:5000
   })
   //axios拦截器，请求拦截
   instance.interceptors.request.use(config => {
      // console.log(config);
      //1.比如config中的一些信息不符合服务器的要求

      //2.比如每次发射网络请求时，都希望界面中显示一个请求的图表

      //3.某些网络请求（比如说登录（token）），必须携带一些特殊的信息
      return config

   },err => {
      console.log(err)
   })

   instance.interceptors.response.use(res => {
    //  console.log(res);
    return res.data
   },err => {
     console.log(err)
   })
   //发送真正的请求
   return instance(config)
 }




// export function request(config,success,failure) {
//  return new Promise((resolve,reject) => {
//    //1.创建axios实例
//    const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   //发送真正的请求
//   instance(config)
//     .then(res => {
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err)
//     })
//  })
// }