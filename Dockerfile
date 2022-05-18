FROM node
RUN mkdir /services
WORKDIR /services
COPY services /services
EXPOSE 9000