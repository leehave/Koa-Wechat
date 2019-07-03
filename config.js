/*
 * 配置文件
 * 
 */
'use strict'

var path = require('path');
var util = require('./libs/util');

var wechat_file = path.join(__dirname,'./config/wechat.txt');

var config = {
	wechat:{
		appID:'wxaf3d4e6e00a5caca',
		appSecret:'0d9a3ddcdb27f132e0851eb458e784ab',
		token:'wemovie',
		getAccessToken:function(){
			return util.readFileAsync(wechat_file);
		},
		saveAccessToken:function(data){
			let jsonData = JSON.stringify(data);
			return util.writeFileAsync(wechat_file,jsonData);
		},
	}
};

module.exports = config;