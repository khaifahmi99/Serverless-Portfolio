import { Stack, StackProps } from 'aws-cdk-lib';
import { AnyPrincipal, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'bucket', {
      bucketName: 'serverless-portfolio-bucket',
      blockPublicAccess: new BlockPublicAccess({ restrictPublicBuckets: false }),
      websiteIndexDocument: 'index.html'
    });

    const bucketPolicy = new PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [
        `${bucket.bucketArn}/*`
      ],
      principals: [new AnyPrincipal()],
    });

    bucket.addToResourcePolicy(bucketPolicy);

  }
}
