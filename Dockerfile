FROM ruby:2.4.0
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev postgresql-client xvfb qt5-default libqt5webkit5-dev nodejs yarn
RUN mkdir /interconn
WORKDIR /interconn
ADD Gemfile /interconn/Gemfile
ADD Gemfile.lock /interconn/Gemfile.lock
RUN bundle install
ADD . /interconn