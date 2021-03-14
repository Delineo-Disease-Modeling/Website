FROM jhuopensource/semesterly-base:latest

RUN mkdir /code
WORKDIR /code

# Add everything
ADD . /code/

# Use environment based config
COPY ./build/local_settings.py /code/local_settings.py

# Add parser script
# COPY ./build/run_parser.sh /code/run_parser.sh

RUN pip install -r /code/requirements.txt
# This is needed on newer ubuntu
RUN pip install psycopg2-binary

RUN npm install
RUN npm run build
