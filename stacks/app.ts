import * as cdk from 'aws-cdk-lib';
import { CdkCrashCourseStack } from './cdk-crash-course-stack';

const app = new cdk.App();

new CdkCrashCourseStack(app, 'CdkCrashCourseStack', {
    synthesizer: new cdk.DefaultStackSynthesizer({
        generateBootstrapVersionRule: false
    })
})