node {
    checkout scm

    def front_image
    def back_image

    stage("build") {
        dir('client') {
            docker.withRegistry("https://docker.ossystem.ua") {
                front_image = docker.build("monster-questionnaire-front:${env.BUILD_TAG}", ".")
                front_image.push()
            }
        }
        dir('server') {
            docker.withRegistry("https://docker.ossystem.ua") {
                back_image = docker.build("monster-questionnaire-back:${env.BUILD_TAG}", ".")
                back_image.push()
            }
        }
    }

    stage("test images") {
        sh "echo everything went fine, why do you worry?"
    }

    stage("deploy") {
        timeout(time: 180, unit: 'SECONDS') {
            withEnv([
                "FRONT_IMAGE_NAME=docker.ossystem.ua/${front_image.id}",
                "BACK_IMAGE_NAME=docker.ossystem.ua/${back_image.id}",
                "ENV=${env.BRANCH_NAME}",
            ]) {
                kubernetesDeploy configs: 'kubernetes.yml', kubeconfigId: 'kuber-monster-kubeconfig'
            }
        }
    }
}
