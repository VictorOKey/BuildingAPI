FROM python:3.8
WORKDIR /building-api
COPY . /building-api
RUN pip install -r requirements.txt
RUN pip install asyncpg && pip install psycopg2-binary

RUN rm -rf migrations
RUN alembic init migrations
COPY migrations/env.py migrations/env.py

EXPOSE 8000
ENTRYPOINT ["./docker-entrypoint.sh"]