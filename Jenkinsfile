pipeline {
    agent {
        docker {
            image 'node:lts-alpine'
            args '-p 3000:3000'
        }
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'yarn install --frozen-lockfile'
            }
        }

        stage('Build') {
            steps {
                sh 'yarn run build:prod'
            }
        }

        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
    }
}
