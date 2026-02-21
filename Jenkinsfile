pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo "===== CHECKOUT STAGE ====="
                echo "Branch: ${env.BRANCH_NAME}"
                sh 'echo Code checked out successfully'
            }
        }

        stage('Build') {
            steps {
                echo "===== BUILD STAGE ====="
                sh 'echo Building project...'
                sh 'sleep 2'
                sh 'echo Build completed'
            }
        }

        stage('Test') {
            steps {
                echo "===== TEST STAGE ====="
                sh '''
                if [ -f index.html ]; then
                    echo "index.html found - Test Passed"
                else
                    echo "index.html missing - Test Failed"
                    exit 1
                fi
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo "===== DEPLOY STAGE ====="
                sh 'echo Deploying project...'
                sh 'sleep 2'
                sh 'echo Deployment successful'
            }
        }
    }

    post {
        always {
            echo "===== PIPELINE FINISHED ====="
        }
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Please check logs."
        }
    }
}