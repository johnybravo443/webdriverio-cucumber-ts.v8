def NAME = 'James Bond'

pipeline {
    agent any

    tools {
        nodejs 'node-18.13.0'
    }

    environment {
        SECRET_TEXT = credentials('secrettext')
    }

    parameters {
        choice(name: 'CUCUMBER_TAGS', choices: ['all','contactus','dropradiocheck','iframe'], description: 'choose the cucumber tags to run')
    }

    stages {
        stage("build") {
            steps {
                echo 'build...'
                echo "secret text is ${SECRET_TEXT}"
            }
        }

        stage("test") {
            steps{
                echo 'test...'
                sh 'node -v'
                sh 'npm -v'
                echo "Name is ${NAME}"
                sh "npm install"
                sh "npx wdio run ./wdio.conf.ts --cucumberOpts.tagExpression='@${params.CUCUMBER_TAGS}'"
            }
        }

        stage("deploy") {
            steps {
                echo 'deploy...'
                echo "Branch name is: ${BRANCH_NAME}"
                withCredentials([usernamePassword(credentialsId: 'localadmin', passwordVariable: 'PWD', usernameVariable: 'USER')]) {
                    echo "Username is: ${USER}"
                    echo "Password is: ${PWD}"
                }
            }
        }
    }
}
