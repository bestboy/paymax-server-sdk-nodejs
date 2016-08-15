var Paymax=require("Paymax");

getResult = function (e, data) {
    console.log("data===" + data);
}
function generateRandomAlphaNum(len) {
        var rdmString = "";
        for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
        return rdmString.substr(0, len);
}
/**
 下单
 */
/**
Paymax.charge.create(
    {
        amount: '0.01',
        subject: 'test_subject',
        body: 'this is a body',
        order_no: generateRandomAlphaNum(20),
        channel: 'alipay_app',
        client_ip: '127.0.0.1',
        app: 'app_06m9Q26zL61ee55a',
        currency: 'cny',
        extra: {},
        description: 'this is a description',
    }, getResult
);*/
/**
 订单查询
 */
Paymax.charge.query('ch_fbe2d2675043004b02303b6a',getResult);

/**
 退款
 */

/**
 *
 Paymax.refund.create(
        'ch_a59123a1538074f3cfa6568b',
         {
         'amount':'0.01',
         'description':'this is a description',
         'extra':{}
         },
         getResult
 ); */
/**
 退款查询
 */
/**Paymax.refund.query(
         {
         'chargeNo':'ch_a59123a1538074f3cfa6568b',
         'refundNo':'re_d6586ff6e077b95985344538'
         }
        ,getResult
 );*/