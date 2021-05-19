// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7rlam9ksl8kti6j47d302461ic",     // CognitoClientID
  "api_base_url": "https://7e6umnhz11.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-webapp-us-west-2.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1ibzpx4xr6zqx.amplifyapp.com"                                      // AmplifyURL
};

export default config;
