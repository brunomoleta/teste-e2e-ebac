pipeline {
        agent any

        stages {
            stage('Clonar repositório') {
                steps {
                    git branch: 'main', url: 'https://github.com/brunomoleta/teste-e2e-ebac.git'
                }
            }
            stage('Instalar dependências') {
                steps {
                    sh 'npm install'
                }
            }
            stage('Test') {
                steps {
                    sh 'NO_COLOR=1 npm run cy:run'
                }
            }
        }
    }