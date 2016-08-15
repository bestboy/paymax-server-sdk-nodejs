
var libpath = './lib';

module.exports = {
    conf:     	    require(libpath + '/conf.js'),
  httpsHelper:     	require(libpath + '/httpsHelper.js'),
  paymax:    	    require(libpath + '/paymax.js'),
  sign:    	        require(libpath + '/sign.js')
};
