Copyright (C) Microsoft Corporation. All rights reserved.

새로운 크로스 플랫폼 PowerShell 사용 https://aka.ms/pscore6

PS C:\Users\HOME\Desktop\nodejs-docker-app> docker build -t gksgpals96/nodejs ./
error during connect: This error may indicate that the docker daemon is not running.: Post "http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.24/build?buildargs=%7B%7D&cachefrom=%5B%5D&cgroupparent=&cpuperiod=0&cpuquota=0&cpusetcpus=&cpusetmems=&cpushares=0&dockerfile=Dockerfile&labels=%7B%7D&memory=0&memswap=0&networkmode=default&rm=1&shmsize=0&t=gksgpals96%2Fnodejs&target=&ulimits=null&version=1": open //./pipe/docker_engine: The system cannot find the file specified.
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker build -t gksgpals96/nodejs ./
[+] Building 51.5s (9/9) FINISHED
 => [internal] load build definition from Dockerfile                                       0.0s 
 => => transferring dockerfile: 121B                                                       0.0s 
 => [internal] load .dockerignore                                                          0.1s 
 => => transferring context: 2B                                                            0.0s 
 => [internal] load metadata for docker.io/library/node:10                                 3.3s 
 => [auth] library/node:pull token for registry-1.docker.io                                0.0s 
 => [internal] load build context                                                          0.1s 
 => => transferring context: 303B                                                          0.0s 
 => [1/3] FROM docker.io/library/node:10@sha256:59531d2835edd5161c8f9512f9e095b1836f7a1f  42.1s 
 => => resolve docker.io/library/node:10@sha256:59531d2835edd5161c8f9512f9e095b1836f7a1fc  0.0s 
 => => sha256:28dca6642db82aaecbed18101d9966f001e8de6691e1a1718c2927c124d 7.83kB / 7.83kB  0.0s 
 => => sha256:59531d2835edd5161c8f9512f9e095b1836f7a1fcb0ab73e005ec4604738491 776B / 776B  0.0s 
 => => sha256:686e0e859358f28bfe1641e1627549b9cd0ad74f222b953d74209213488 2.21kB / 2.21kB  0.0s 
 => => sha256:b53ce1fd2746e8d2037f1b0b91ddea0cc7411eb3e5949fe10c0320aca8f 4.34MB / 4.34MB  0.7s 
 => => sha256:76b8ef87096fa726adbe8f073ef69bb5664bac19474c5cce4dd69e08 45.38MB / 45.38MB  12.3s 
 => => sha256:2e2bafe8a0f40509cc10249087268e66a662e437f10e9598a09abb568 11.29MB / 11.29MB  3.0s 
 => => sha256:84a8c1bd5887cc4a89e1f286fed9ee31ce12dba9f6813cf14082ada3 49.79MB / 49.79MB  12.1s 
 => => sha256:7a803dc0b40fcd10faee3fb3ebb2d7aaa88500520e6295295f5163 214.35MB / 214.35MB  31.1s 
 => => extracting sha256:76b8ef87096fa726adbe8f073ef69bb5664bac19474c5cce4dd69e08a234903b  2.0s 
 => => sha256:b800e94e7303e276b8fb4911a40bfe28f46180d997022c69bf1ee02fb7 4.19kB / 4.19kB  13.1s 
 => => sha256:0da9fbf60d485c74d153bfc7562f34533550e3dd8aa78f5e8c2476ed 21.42MB / 21.42MB  17.1s 
 => => sha256:04dccde934cf0d6ab9d303fe73b36bc4ed84329d9d562049a69a5d38af 2.48MB / 2.48MB  14.3s 
 => => sha256:73269890f6fdf96184d0fdb0afe3cf697b0c8dbe1e7a077f0fab445d74372c 294B / 294B  14.6s 
 => => extracting sha256:2e2bafe8a0f40509cc10249087268e66a662e437f10e9598a09abb5687038a57  0.4s 
 => => extracting sha256:b53ce1fd2746e8d2037f1b0b91ddea0cc7411eb3e5949fe10c0320aca8f7392b  0.2s 
 => => extracting sha256:84a8c1bd5887cc4a89e1f286fed9ee31ce12dba9f6813cf14082ada3e9ab6f63  2.4s 
 => => extracting sha256:7a803dc0b40fcd10faee3fb3ebb2d7aaa88500520e6295295f5163c4bb48548b  8.0s 
 => => extracting sha256:b800e94e7303e276b8fb4911a40bfe28f46180d997022c69bf1ee02fb7b86721  0.0s 
 => => extracting sha256:0da9fbf60d485c74d153bfc7562f34533550e3dd8aa78f5e8c2476ed500e0e73  1.3s 
 => => extracting sha256:73269890f6fdf96184d0fdb0afe3cf697b0c8dbe1e7a077f0fab445d74372c78  0.0s 
 => [2/3] COPY package*.json ./                                                            3.6s 
 => [3/3] RUN npm install                                                                  2.0s 
 => exporting to image                                                                     0.3s 
 => => exporting layers                                                                    0.2s 
 => => writing image sha256:8093d210573f3ee9c50b9075ee1a28cf2dcf437c05f6a34582bb621b1303d  0.0s 
 => => naming to docker.io/gksgpals96/nodejs                                               0.0s 

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix 
them
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker build -t gksgpals96/nodejs ./
[+] Building 4.7s (9/9) FINISHED
 => [internal] load build definition from Dockerfile                                       0.0s 
 => => transferring dockerfile: 135B                                                       0.0s 
 => [internal] load .dockerignore                                                          0.1s 
 => => transferring context: 2B                                                            0.0s 
 => [internal] load metadata for docker.io/library/node:10                                 2.0s 
 => [auth] library/node:pull token for registry-1.docker.io                                0.0s 
 => [internal] load build context                                                          0.0s 
 => CACHED [1/3] FROM docker.io/library/node:10@sha256:59531d2835edd5161c8f9512f9e095b183  0.0s 
 => [2/3] COPY ./ ./                                                                       0.1s 
 => [3/3] RUN npm install                                                                  2.1s 
 => exporting to image                                                                     0.2s 
 => => exporting layers                                                                    0.2s 
 => => writing image sha256:9f9fa9b55c8da923f8eddd0e2ef9c918d68583bdbb7656b2f981e031aa7f4  0.0s 
 => => naming to docker.io/gksgpals96/nodejs                                               0.0s 

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix 
them
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker build -t gksgpals96/nodejs ./
[+] Building 3.6s (8/8) FINISHED
 => [internal] load build definition from Dockerfile                                       0.0s 
 => => transferring dockerfile: 31B                                                        0.0s 
 => [internal] load .dockerignore                                                          0.1s 
 => => transferring context: 2B                                                            0.0s 
 => [internal] load metadata for docker.io/library/node:10                                 1.0s 
 => [internal] load build context                                                          0.0s 
 => CACHED [1/3] FROM docker.io/library/node:10@sha256:59531d2835edd5161c8f9512f9e095b183  0.0s 
 => [3/3] RUN npm install                                                                  2.1s 
 => => exporting layers                                                                    0.2s 
 => => naming to docker.io/gksgpals96/nodejs                                               0.0s 
Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix 
them
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run gksgpals96/nodejs:latest 
Running server
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -p 5000:8080 gksgpals96/nodejs:latest    
Running server
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -p 5000:8080 gksgpals96/nodejs           
Running server
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -p 5000:5000 gksgpals96/nodejs
Running server
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -it node ls
Unable to find image 'node:latest' locally
latest: Pulling from library/node
0bc3020d05f1: Pull complete
a110e5871660: Pull complete
a8fd09c11b02: Pull complete
14feb89c4a52: Pull complete
612a5de913f3: Pull complete
b86d81a99d41: Pull complete
5dd61d4ad9e8: Pull complete
7aae82345965: Pull complete
Digest: sha256:ca6daf1543242acb0ca59ff425509eab7defb9452f6ae07c156893db06c7a9a4
Status: Downloaded newer image for node:latest
bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
boot  etc  lib   media  opt  root  sbin  sys  usr
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker build -t gksgpals96/nodejs ./                
[+] Building 5.0s (10/10) FINISHED
 => [internal] load build definition from Dockerfile                                       0.0s 
 => => transferring dockerfile: 159B                                                       0.0s 
 => [internal] load .dockerignore                                                          0.1s 
 => => transferring context: 2B                                                            0.0s 
 => [internal] load metadata for docker.io/library/node:10                                 2.2s 
 => [auth] library/node:pull token for registry-1.docker.io                                0.0s 
 => [internal] load build context                                                          0.1s 
 => => transferring context: 452B                                                          0.0s 
 => [2/4] WORKDIR /usr/src/app                                                             0.1s 
 => [3/4] COPY ./ ./                                                                       0.1s 
 => [4/4] RUN npm install                                                                  2.1s 
 => exporting to image                                                                     0.3s 
 => => exporting layers                                                                    0.2s 
 => => writing image sha256:8e8b10db7f5ab4c67f9ce99edd59cd947f9dd02d019a60d94aed2de1d6f8b  0.0s 
 => => naming to docker.io/gksgpals96/nodejs                                               0.0s 

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix 
them
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -it gksgpals96/nodejs sh                 
# ls
Dockerfile  node_modules  package-lock.json  package.json  server.js
# cd /
bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
boot  etc  lib   media  opt  root  sbin  sys  usr
# ^C
# ^C
# docker kill
sh: 4: docker: not found
# docker stop
sh: 5: docker: not found
# ^C
#
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker build -t gksgpals96/nodejs ./
[+] Building 2.6s (10/10) FINISHED
 => [internal] load build definition from Dockerfile                                       0.0s 
 => => transferring dockerfile: 31B                                                        0.0s 
 => [internal] load .dockerignore                                                          0.1s 
 => => transferring context: 2B                                                            0.0s 
 => [internal] load metadata for docker.io/library/node:10                                 2.4s 
 => [auth] library/node:pull token for registry-1.docker.io                                0.0s 
 => [1/4] FROM docker.io/library/node:10@sha256:59531d2835edd5161c8f9512f9e095b1836f7a1fc  0.0s 
 => [internal] load build context                                                          0.0s 
 => CACHED [2/4] WORKDIR /usr/src/app                                                      0.0s 
 => CACHED [4/4] RUN npm install                                                           0.0s 
 => exporting to image                                                                     0.1s 
 => => exporting layers                                                                    0.0s 
 => => writing image sha256:8e8b10db7f5ab4c67f9ce99edd59cd947f9dd02d019a60d94aed2de1d6f8b  0.0s 

them
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -d -p 5000:5000 gksgpals96/nodejs        
8f73e9b862c861669c352581e1579b4629533f9484e655d0a1a93ff1c15bdfb4
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker ps
CONTAINER ID   IMAGE               COMMAND                  CREATED         STATUS         PORTS                                       NAMES
8f73e9b862c8   gksgpals96/nodejs   "docker-entrypoint.s…"   7 seconds ago   Up 6 seconds   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp   eager_cartwright
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker stop 8f73e9b862c86
8f73e9b862c86
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker build -t gksgpals96/nodejs ./                
[+] Building 3.6s (9/9) FINISHED
 => [internal] load build definition from Dockerfile                                       0.0s 
 => => transferring dockerfile: 31B                                                        0.0s 
 => [internal] load .dockerignore                                                          0.1s 
 => => transferring context: 2B                                                            0.0s 
 => [internal] load metadata for docker.io/library/node:10                                 1.0s 
 => [1/4] FROM docker.io/library/node:10@sha256:59531d2835edd5161c8f9512f9e095b1836f7a1fc  0.0s 
 => [internal] load build context                                                          0.0s 
 => CACHED [2/4] WORKDIR /usr/src/app                                                      0.0s 
 => [4/4] RUN npm install                                                                  2.1s 
 => exporting to image                                                                     0.3s 
 => => exporting layers                                                                    0.2s 
 => => writing image sha256:f6210f3280a74869e598e4413a1b7fd54746fc16f3975f91d333b57a0722e  0.0s 
 => => naming to docker.io/gksgpals96/nodejs                                               0.0s 

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix 
them
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -d -p 5000:5000 gksgpals96/nodejs        
1c6820fd8f308719e9046ab69525bc7e8749eb253efe9928586f7300b1dc5917
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker build -t gksgpals96/nodejs ./                
[+] Building 5.6s (11/11) FINISHED
 => [internal] load build definition from Dockerfile                                       0.0s 
 => => transferring dockerfile: 159B                                                       0.0s 
 => [internal] load .dockerignore                                                          0.1s 
 => => transferring context: 2B                                                            0.0s 
 => [internal] load metadata for docker.io/library/node:10                                 2.1s 
 => [auth] library/node:pull token for registry-1.docker.io                                0.0s 
 => [internal] load build context                                                          0.0s 
 => => transferring context: 454B                                                          0.0s 
 => [1/5] FROM docker.io/library/node:10@sha256:59531d2835edd5161c8f9512f9e095b1836f7a1fc  0.0s 
 => [3/5] COPY package*.json ./                                                            0.1s 
 => [4/5] RUN npm install                                                                  2.8s 
 => [5/5] COPY ./ ./                                                                       0.1s 
 => exporting to image                                                                     0.3s 
 => => exporting layers                                                                    0.2s 
 => => writing image sha256:41f484cdf6e128d42e1680ae5f40fabd018f7f554ef5a8f94e7b5b0d15e24  0.0s 
 => => naming to docker.io/gksgpals96/nodejs                                               0.0s 

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix 
them
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker build -t gksgpals96/nodejs ./
[+] Building 1.6s (10/10) FINISHED
 => [internal] load build definition from Dockerfile                                       0.1s 
 => => transferring dockerfile: 31B                                                        0.0s 
 => [internal] load .dockerignore                                                          0.1s 
 => => transferring context: 2B                                                            0.0s 
 => [internal] load metadata for docker.io/library/node:10                                 1.1s 
 => [internal] load build context                                                          0.0s 
 => => transferring context: 338B                                                          0.0s 
 => [1/5] FROM docker.io/library/node:10@sha256:59531d2835edd5161c8f9512f9e095b1836f7a1fc  0.0s 
 => CACHED [4/5] RUN npm install                                                           0.0s 
 => [5/5] COPY ./ ./                                                                       0.1s 
 => exporting to image                                                                     0.2s 
 => => exporting layers                                                                    0.1s 
 => => writing image sha256:cdc9efe1455bd07baa86c6b3c63418a88f1babea0d16329e4c223c37d014e  0.0s 

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix 
them
les -v %cd%:/usr/src/app gksgpals96/nodejs
docker: Error response from daemon: create %cd%: "%cd%" includes invalid characters for a local 
volume name, only "[a-zA-Z0-9][a-zA-Z0-9_.-]" are allowed. If you intended to pass a host directory, use absolute path.
See 'docker run --help'.
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -d -p 5000:5000 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app gksgpals96/nodejs
docker: invalid reference format.
See 'docker run --help'.
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -d -p 5000:5000 -v /usr/src/app/node_modules -v %cd%:/usr/src/app gksgpals96/nodejs
docker: Error response from daemon: create %cd%: "%cd%" includes invalid characters for a local 
volume name, only "[a-zA-Z0-9][a-zA-Z0-9_.-]" are allowed. If you intended to pass a host directory, use absolute path.
See 'docker run --help'.
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker build -t gksgpals96/nodejs ./
[+] Building 2.6s (11/11) FINISHED
 => [internal] load build definition from Dockerfile                                       0.0s 
 => => transferring dockerfile: 31B                                                        0.0s 
 => [internal] load .dockerignore                                                          0.1s 
 => => transferring context: 2B                                                            0.0s 
 => [internal] load metadata for docker.io/library/node:10                                 2.3s 
 => [auth] library/node:pull token for registry-1.docker.io                                0.0s 
 => [internal] load build context                                                          0.0s 
 => => transferring context: 92B                                                           0.0s 
 => [1/5] FROM docker.io/library/node:10@sha256:59531d2835edd5161c8f9512f9e095b1836f7a1fc  0.0s 
 => CACHED [2/5] WORKDIR /usr/src/app                                                      0.0s 
 => CACHED [4/5] RUN npm install                                                           0.0s 
 => CACHED [5/5] COPY ./ ./                                                                0.0s 
 => exporting to image                                                                     0.1s 
 => => exporting layers                                                                    0.0s 
 => => writing image sha256:cdc9efe1455bd07baa86c6b3c63418a88f1babea0d16329e4c223c37d014e  0.0s 

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix 
them
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -d -p 5000:5000 -v /usr/src/app/node_modudocker: Error response from daemon: create %cd%: "%cd%" includes invalid characters for a local 
ory, use absolute path.
See 'docker run --help'.
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -d -p 5000:5000 -v /usr/src/app/node_modules -v %pwd%:/usr/src/app gksgpals96/nodejs
docker: Error response from daemon: create %pwd%: "%pwd%" includes invalid characters for a local volume name, only "[a-zA-Z0-9][a-zA-Z0-9_.-]" are allowed. If you intended to pass a host directory, use absolute path.
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker stop all
Error response from daemon: No such container: all
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker stop    
"docker stop" requires at least 1 argument.
See 'docker stop --help'.

Usage:  docker stop [OPTIONS] CONTAINER [CONTAINER...]

Stop one or more running containers
PS C:\Users\HOME\Desktop\nodejs-docker-app> docker run -d -p 5000:5000 -v /usr/src/app/node_modules -v %pwd%:/usr/src/app gksgpals96/nodejs
docker: Error response from daemon: create %pwd%: "%pwd%" includes invalid characters for a local volume name, only "[a-zA-Z0-9][a-zA-Z0-9_.-]" are allowed. If you intended to pass a host directory, use absolute path.
See 'docker run --help'.
PS C:\Users\HOME\Desktop\nodejs-docker-app> 