pipeline {
    agent any

    tools {
        node 'node-18.13.0'
    }

    options {
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
            }
        }

        stage("deploy") {
            steps {
                echo 'deploy...'
            }
        }
    }
}
