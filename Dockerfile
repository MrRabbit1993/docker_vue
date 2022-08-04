FROM nginx

# MAINTAINER MrRabbit 老版本
LABEL maintainer="MrRabbit"

# delete nginx config file
# RUN rm /etc/nginx/conf.d/vue.conf

# COPY nginx config file
ADD nginx/vue.conf /etc/nginx/conf.d/

# CP dist file
COPY dist/ /usr/share/nginx/project/vue/
