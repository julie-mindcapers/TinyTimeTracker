Welcome to TinyTimeTracker 
==================================================

This sample code helps get you started with a simple Node.js web service deployed by AWS CloudFormation to AWS Lambda and Amazon API Gateway. It was initially created as AWS CodeStar sample web application from the automated AWS CodeStar tool.

State of the App
----------------
This app has been created as a part of the realization of my long imagined business MindCapers. The long term purpose of this application is to implement an ownership model for startup businesses such as mine. The immediate purpose is to knock the rust off some desirable skills I don't get to use at my current job and demonstrate competency in some new skills I've learned on my own time.

The state of this application is best described as barely started, non-functional. I plan to put a "free" license on it (I haven't decided which one yet), and request donations for those that actually use it. 

App Intent and Design
---------------------
The intent of this app is to track time invested into creating MindCapers and its products, as the initial budget for this startup is $0. My hope is that as this becomes less a figment of my imagination and something that produces income, profits will be paid to direct contributors and to components used. Some proportion of proceeds will go toward costs (actual costs plus donations to free licensed components), some will go to direct contributors.

"Free" licensed components actually used (i.e., the Godot engine for my planned game, the AdMob module) will be assigned dollar amounts that I feel I would need to pay for a commercial product that did the same thing. As revenue comes in on channels they are used in, monetary donations will be made incrementally until the product is "paid for". Components that require an upfront purchase will get no donations. 

Direct contributors will have their work categorized into levels. Initially, I am planning Owner (100%), Expert (80%), Journeyman (65%), Newbie/Newbie Mentor (50%). Proceeds coming into a channel will be distributed on a weighted effort x amount of effort basis. Currently, this is a one woman show, but I anticipate at least one of my teenaged children contributing, possibly other people, and want to spell out how I will recognize their efforts up front.  

TinyTimeTracker will be used to record time contributions and determine payouts when proceeds are realized.

Node.js setup
=============
$ npm install mysql
$ npm install express --save
$ npm install --save iam

CodeStar Startup Stuff
==================================================

What This Started With
----------------------

This sample includes:

* README.md - this file
* buildspec.yml - this file is used by AWS CodeBuild to package your
  application for deployment to AWS Lambda
* index.js - this file contains the sample Node.js code for the web service
* template.yml - this file contains the AWS Serverless Application Model (AWS SAM) used
  by AWS CloudFormation to deploy your application to AWS Lambda and Amazon API
  Gateway.
* tests/ - this directory contains unit tests for your application
* template-configuration.json - this file contains the project ARN with placeholders used for tagging resources with the project ID

What Do I Do Next?
------------------

If you have checked out a local copy of your repository you can start making
changes to the sample code.  We suggest making a small change to index.js first,
so you can see how changes pushed to your project's repository are automatically
picked up by your project pipeline and deployed to AWS Lambda and Amazon API Gateway.
(You can watch the pipeline progress on your AWS CodeStar project dashboard.)
Once you've seen how that works, start developing your own code, and have fun!

To run your tests locally, go to the root directory of the
sample code and run the `npm test` command, which
AWS CodeBuild also runs through your `buildspec.yml` file.

To test your new code during the release process, modify the existing tests or
add tests to the tests directory. AWS CodeBuild will run the tests during the
build stage of your project pipeline. You can find the test results
in the AWS CodeBuild console.

Learn more about AWS CodeBuild and how it builds and tests your application here:
https://docs.aws.amazon.com/codebuild/latest/userguide/concepts.html

Learn more about AWS Serverless Application Model (AWS SAM) and how it works here:
https://github.com/awslabs/serverless-application-model/blob/master/HOWTO.md

AWS Lambda Developer Guide:
http://docs.aws.amazon.com/lambda/latest/dg/deploying-lambda-apps.html

Learn more about AWS CodeStar by reading the user guide, and post questions and
comments about AWS CodeStar on our forum.

User Guide: http://docs.aws.amazon.com/codestar/latest/userguide/welcome.html

Forum: https://forums.aws.amazon.com/forum.jspa?forumID=248

What Should I Do Before Running My Project in Production?
------------------

AWS recommends you review the security best practices recommended by the framework
author of your selected sample application before running it in production. You
should also regularly review and apply any available patches or associated security
advisories for dependencies used within your application.

Best Practices: https://docs.aws.amazon.com/codestar/latest/userguide/best-practices.html?icmpid=docs_acs_rm_sec
