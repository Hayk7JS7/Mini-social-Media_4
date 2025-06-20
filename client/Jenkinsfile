pipeline {
    agent any

    stages {
        stage('Install Backend') {
            steps {
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('client') {
                    sh 'npm run build || echo "Skipping build if no script"'
                }
            }
        }

        stage('Test') {
            steps {
                echo '🧪 You can add actual tests here if available'
            }
        }
    }
}
