import AWS from "aws-sdk";

AWS.config.update({
    secretAccessKey: Config.SECRET,
    accessKeyId: Config.ACCESS,
    region: Config.REGION
});

const sendMessage = (data) => {
    let { phoneNumber, message, subject } = data;
    return new Promise((resolve, reject) => {
        var params = {
            Message: message,
            PhoneNumber: '+' + phoneNumber,
            MessageAttributes: {
                'AWS.SNS.SMS.SenderID': {
                    'DataType': 'String',
                    'StringValue': subject
                }
            }
        };

        var sendPromise = new AWS.SNS({ apiVersion: '2021-15-06' }).publish(params).promise();
        sendPromise
            .then(function (data) {
                console.log("Message: ", data.MessageId);
                return resolve(data.MessageId);
            })
            .catch(function (err) {
                console.log(err)
                return reject(err);
            });
    });
};
export { sendMessage };
