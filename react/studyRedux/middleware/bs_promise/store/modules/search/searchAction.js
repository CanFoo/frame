import { SHOW_MESSAGE_SUCESS } from '../../types'
import { createAction } from 'redux-actions'
import fetchJsonp from 'fetch-jsonp'

export function getThenShow(value) {
	const url = 'https://gsp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value;
  return createAction(
		SHOW_MESSAGE_SUCESS,
		() => fetchJsonp(url,  {
	    timeout: 3000,
	    jsonpCallback: 'cb',
	    body: {
	    	wd: value
	    }
	  }).then(function(response) {
		  return response.json()
		}).then(function(json) {
			return json.s
    }).catch(function(ex) {
    	return 'parsing failed'
    })
	)()
}
