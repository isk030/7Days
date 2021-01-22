# 7 Days

7 Days ist eine experimentelles Board, welches Weisheiten anonym auflistet und nach Toxic Content bewertet. Je nach dem wie hoch dieser Wert ist und die Weisheit beliebt ist wird die maximal Zeit von 7 Tagen, die der Post "lebt" gekürzt. Aktuell gehostet: sevendayz.herokuapp.com

  - Django Backend
  - Integriertes React Js mit Redux Frontend nach folgendem Vorbild: https://mattsegal.dev/django-react.html
  - Perspective API powered by Google Labs
  - PostgreSQL Datanbank

# Funktionsweise und Aufbau
Aufbau:

![Architektur](https://raw.githubusercontent.com/isk030/31Days/master/Arch1.jpg?token=AGDCEG62FMAIQ7X33AWVLZLABMTYK)

Funktion:
Es können Weisheiten gepostet werden. Wenn man seine Weisheit eingetragen hat wird bereits in der Eingabemaske eine Bewertung über die Toxicity über die Perpective API abgefragt und angezeigt. Diese Bewertung und die Beliebtheit des Posts (likes und fails) entscheidet darüber, wie lange dieser Post "leben" darf.


### In der Entwicklungsumgebung
 Die Application braucht NodeJS im Devmode. Die node module können wie üblich installiert werden und mit ```$ npm run dev``` gestartet werden

```sh
$ npm install
$ npm run dev
```

Das Django Backend startet im Dev modus mit dem üblichen vorgehen. Nach Installation der Pakete und der Migration der Datenbank kann der Server gestartet werden.

```sh
$ pip install -r requirements.txt
$ python manage.py makemigrations
$ python manage.py migration
$ python manage.py runserver
```

