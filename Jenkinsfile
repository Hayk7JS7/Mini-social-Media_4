pipeline {
    agent {
        docker {
            image 'docker:24.0.7-cli' // Use a Docker CLI image with shell, not `docker:latest`
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    environment {
        IMAGE_NAME = "hayk7js7/mini-social-media"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Hayk7JS7/Mini-social-Media_4.git'
            }
        }

        stage('Install Backend') {
            steps {
                dir('server') {
                    sh 'apk add --no-cache nodejs npm && npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('client') {
                    sh 'apk add --no-cache nodejs npm && npm install'
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
                echo '🧪 Add real tests here if needed'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $IMAGE_NAME:$IMAGE_TAG
                    '''
                }
            }
        }
    }
}
