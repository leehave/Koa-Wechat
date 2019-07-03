/*
 * 配置自定义菜单
 */
'use strict'


module.exports = {
	
 	'button':[
  {
    'name':'预约会议室',
    'sub_button':[
    {	
     	'type':'click',
      'name':'超级办公室',
      'key':'TYPE_SUPER',
      'sub_button':[]
    },
    {
      'type':'click',
      'name':'共享办公室',
      'key':'TYPE_GONGXIANG',
      'sub_button':[]
    }]
 	}]
}