pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Hayk7JS7/Mini-social-Media_4.git'
            }
        }
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
