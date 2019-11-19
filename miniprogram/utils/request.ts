type MethodType = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
type DataType = string | object | ArrayBuffer;
interface IRequestOptions {
    url?: string;
    data?: DataType;
    header?: Object;    //		否	设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json
    method?: MethodType;    //	GET	否	HTTP 请求方法
    dataType?: string   //	json	否	返回的数据格式
    responseType?: string //	text	否	响应的数据类型	1.7.0
    success?: (res: IResponse) => void;   // 否	接口调用成功的回调函数
    fail?: (e: any) => void;        // 否	接口调用失败的回调函数
    complete?: () => void;    // 否	接口调用结束的回调函数（调用成功、失败都会执行）
}
interface IResponse {
    data: DataType;
    statusCode: number;
    header: object;
}

class Http {
    // request(options: IRequestOptions) {
    //     options.success = (res: IResponse) => {

    //     }
    //     options.fail = (e) => {

    //     }
    // }

    get(url: string, data: DataType, options: IRequestOptions = {}) {
        options.url = url;
        options.data = data;
        options.method = 'GET';
        // return this.request(options);
    }
    // async post() {

    // }
}

export default new Http();

// class Request {
//     promise: Promise<any>;
//     task: wx.RequestTask;
//     constructor(options: IRequestOptions) {
//         this.promise = new Promise((r, j) => {
//             wx.request()
//         });
//     }

//     then() {

//     }
//     abort() {

//     }
// }
