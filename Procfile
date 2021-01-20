release: python manage.py makemigrations
release: python manage.py migrate
web: gunicorn 7Days.wsgi --log-file -
npm run build