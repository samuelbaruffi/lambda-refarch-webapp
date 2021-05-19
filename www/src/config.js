// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "587mqk9bo7oi1lh3mro0t14dpk",     // CognitoClientID
  "api_base_url": "https://to32ti2nm1.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverless.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d142ew8spovua1.amplifyapp.com"                                      // AmplifyURL
};

export default config;
