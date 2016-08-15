var os =require('os');
var fs=require('fs');

var conf={};

//生产环境地址
conf.API_HOST='172.30.21.20';
conf.PORT='9001';
//测试环境地址
//conf.API_HOST='127.0.0.1';
//conf.PORT='9001';

conf.BASE_PATH='/v1/';
conf.sdkVersion=require('./package.json').version;

//Paymax提供给商户的SecretKey，登录网站后查看
conf.secretKey='b3fc21858fa5424cafecd338252b155c';

//Paymax提供给商户的公钥，登录网站后查看
conf.paymaxPublicKey=fs.readFileSync('paymax_rsa_public_key.pem');

//商户自己的私钥【公钥通过Paymax网站上传到Paymax，私钥设置到下面的变量中】
conf.privateKey=fs.readFileSync('rsa_private_key.pem');

conf.UA={
		'lang':'nodejs',
		'publisher':'Paymax',
		'sdk-version':conf.sdkVersion,
		'os.name':os.type(),
		'os.version':os.release(),
		'os.platform':os.platform(),
		'os.arch':os.arch(),
		'os.hostname':os.hostname()
	}
module.exports =conf;