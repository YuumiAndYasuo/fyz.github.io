/**
 * @author          计科1-冯业展
 * @param method    请求方法
 * @param host      数据接口域名
 * @param type      具体接口
 * @param parameter post请求时参数
 * @param callback  回调函数
 */
function requestMethod(method,host,type,parameter,callback) {
    // 1、创建一个网络请求对象
    var xhr=new XMLHttpRequest();
    // 2、与服务端建立连接
    xhr.open(method,host+type);
    // 设置请求头 告诉服务器以表单的形式传过去的
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    // 3、向服务器发送请求（传参）
    xhr.send(parameter);
    // 4、接收服务器返回的数据
    xhr.onreadystatechange=function () {
        // 4代表数据请求完成
        if(xhr.readyState===4&&xhr.status===200){
            // 解析数据
            var res=JSON.parse(xhr.responseText);
            var data=res.data;
            callback(data,xhr.responseText);
        }
    }
}