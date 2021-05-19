// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4qotbn37klgqqbkugqog8cg60a",     // CognitoClientID
  "api_base_url": "https://pgddwcetmb.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-webapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1cw2j2h9ut0m1.amplifyapp.com"                                      // AmplifyURL
};

export default config;
