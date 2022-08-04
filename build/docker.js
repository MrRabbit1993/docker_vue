const execa = require('execa')
const { name,version } = require('../package.json')
const port = 8087
const nginxPort = 8081

function runImage() {
  console.log('构建成功')
  // docker run -d -p $prot:$nginxProt --name $containerName $dockerImages:$version
  return execa('docker', ['run', '-d', '-p', `${port}:${nginxPort}`, '--name', 'docker_demo', name])
}
execa('docker', ['build', `.`, `-t`, `${name}`], { stdio: 'inherit' })
  .then(runImage)
  .catch((err) => { console.error(err) })