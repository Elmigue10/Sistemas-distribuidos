FROM ubuntu:latest

RUN apt-get update

RUN apt-get install --assume-yes git
RUN git clone https://github.com/jhonmendex/compgraf ./var/www/html
ENV TZ=America/Bogota
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get install -y apache2

EXPOSE 80

ENTRYPOINT ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]