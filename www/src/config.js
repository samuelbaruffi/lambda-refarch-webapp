// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1vh1binkpf1hkn5f49uhnp6jl",     // CognitoClientID
  "api_base_url": "https://yirfhqstj1.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverlessapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d193nposzhyo8k.amplifyapp.com"                                      // AmplifyURL
};

export default config;
