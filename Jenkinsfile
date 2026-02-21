pipeline {
    agent any

    environment {
        PROJECT_NAME = "Capstone Project"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "===== CHECKOUT STAGE ====="
                echo "Branch: ${env.BRANCH_NAME}"
                bat 'git --version'
            }
        }

        stage('Build') {
            steps {
                echo "===== BUILD STAGE ====="
                echo "Building ${PROJECT_NAME}"

                // Show files in workspace
                bat 'dir'

                // Simulate build step
                bat 'echo Compiling HTML/CSS/JS...'
                bat 'timeout /t 2 >nul'
                bat 'echo Build Successful'
            }
        }

        stage('Test') {
            steps {
                echo "===== TEST STAGE ====="

                // Simulate test checks
                bat 'echo Running tests...'
                bat 'timeout /t 2 >nul'

                // Example: Check if index.html exists
                bat '''
                if exist index.html (
                    echo index.html found - Test Passed
                ) else (
                    echo index.html missing - Test Failed
                    exit 1
                )
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo "===== DEPLOY STAGE ====="
                bat 'echo Deploying application...'
                bat 'timeout /t 2 >nul'
                bat 'echo Deployment Completed'
            }
        }
    }

    post {
        always {
            echo "===== PIPELINE FINISHED ====="
        }
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline failed. Please check logs."
        }
    }
}