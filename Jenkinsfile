pipeline {
    agent any

    tools {
        nodejs 'node-18.13.0'
    }

    environment {
        SECRET_TEXT = credentials('secrettext')
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
            }
        }

        stage("deploy") {
            steps {
                echo 'deploy...'
            }
        }
    }
}
