#!/bin/bash

dockerImages="vuets"
version="v0.1"
prot="8087"
nginxProt="8081"
containerName="textcontainer"

echo "===准备创建docker镜像=====>"

docker build -t $dockerImages:$version -f $1 .

echo "===创建$dockerImages:$version镜像成功=====>"

docker image  ls | grep $dockerImages

echo "===准备创建运行容器====>"

docker run -d -p $prot:$nginxProt --name $containerName $dockerImages:$version