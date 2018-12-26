FROM python:3.7.1-alpine
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY src .
EXPOSE 8080
CMD [ "gunicorn", "--bind", "0.0.0.0:8080", "wsgi" ]

