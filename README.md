# Docker commands

# Start and stop application

```
docker compose run --no-deps web rails new . --force --database=postgresql
```

-- build will reflect changes

```
docker-compose up
docker-compose up --build
docker-compose down
```

# Migrations

```
docker compose exec web bundle exec rails db:drop db:create
docker-compose exec web bundle exec rails db:migrate
docker-compose exec web bundle exec rails db:seed
```

## Console

```
docker compose exec web bundle exec rails console
```

## Generators

```
docker compose exec web bundle exec rails g model
```
