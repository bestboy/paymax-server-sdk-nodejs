var Conf=require('conf');
var HttpsHelper=require('httpsHelper');
var Sign=require('sign');

/**
 * 封装request.header消息头
 * @param method
 * @param path
 * @param query
 * @param postData
 * @returns {{Authorization: string, nonce: string, timestamp: number, UA: *}}
 */
function getHeader(method,path,query,postData){
	var header={
		'Authorization':Conf.secretKey,
		'nonce':generateRandomAlphaNum(32),
		'timestamp':new Date().getTime(),
		'UA':Conf.UA
	};
	header['sign'] = Sign.sign(method,header,path,query,postData);
	return header;
}
/**
 * header-nonce生成器
 * @param len
 * @returns {string}
 */
function generateRandomAlphaNum(len) {
    var rdmString = "";
    for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);
}
var Paymax={
	charge:{
		//下单
		create:function(data,fn){
			var path=Conf.BASE_PATH+'charges';
			data=JSON.stringify(data);
			var header=getHeader('post',path,'',data);
			HttpsHelper.post(header ,path,'',data,fn);
		},
		//下单查询
		'query':function(orderNo,fn){
			var path=Conf.BASE_PATH+'charges/'+orderNo;
			var header=getHeader('get',path,'','');
			HttpsHelper.get(header ,path,'',fn);
		}
	},
	refund:{
		//退款
		create:function(chargeNo,data,fn){
			var path=Conf.BASE_PATH+'charges/'+chargeNo+'/refunds';
			data=JSON.stringify(data);
			var header=getHeader('post',path,'',data);
			HttpsHelper.post(header ,path,'',data,fn);
		},
		//退款查询
		query:function(data,fn){
			var path=Conf.BASE_PATH+'charges/'+data.chargeNo+'/refunds/'+data.refundNo;
			var header=getHeader('get',path,'','');
			HttpsHelper.get(header ,path,'',fn);
		}
	}
};

module.exports = Paymax;