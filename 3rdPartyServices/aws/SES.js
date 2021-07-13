import AWS from "aws-sdk";
import Config from "../config";

AWS.config.update({secretAccessKey: Config.SECRET, accessKeyId: Config.ACCESS, region: Config.REGION});

export const sendEmail = (data) => {
    let {
        from,
        to,
        cc,
        subject,
        htmlBody,
        textBody
    } = data;
    return new Promise((resolve, reject) => {
        var params = {
            Destination: {
                CcAddresses: cc,
                ToAddresses: to
            },
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: htmlBody
                    }
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: subject
                }
            },
            ConfigurationSetName: Config.SES_CONFIGURATION_SET,
            Source: `${
                from ? from : "Aryan"
            }<${
                Config.FROM_EMAIL_ADDRESS
            }>`
        };

        var sendPromise = new AWS.SES({apiVersion: '2021-15-06'}).sendEmail(params).promise();
        sendPromise.then(function (data) {
            console.log("Email: ", data.MessageId);
            return resolve(data.MessageId);
        }).catch(function (err) {
            console.log(err)
            return reject(err);
        });
    });
};
