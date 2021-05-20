// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4a9ls4hs6c9p68kvanvl8814de",     // CognitoClientID
  "api_base_url": "https://oecg2wv0x7.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverlessapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1r92dz67jefiv.amplifyapp.com"                                      // AmplifyURL
};

export default config;
