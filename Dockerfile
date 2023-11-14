FROM postgres:16.1-alpine3.18
COPY database.sql /docker-entrypoint-initdb.d/

EXPOSE 5432