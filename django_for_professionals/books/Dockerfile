FROM python:3.9

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


WORKDIR /code
COPY requirements.lock /code/
RUN pip install -r requirements.lock

COPY . /code/d