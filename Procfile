release: python manage.py makemigrations
release: python manage.py migrate
web: gunicorn 7Days.wsgi --log-file -
web: python manage.py runserver 0.0.0.0:$PORT --noreload
npm run build