# Django Pick material Icon Widget


### Install

```bash
pip install django-npick
```

### Usage

> add templates path `admin/change_form.html` extra the default admin template to use js css

```python
# project/settings.py
from django-npick import TEMPLATE_PATH   # 1

INSTALLED_APPS = [
  ...
  'django_npick',  # 2 can use static files eg. css js font
  ]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATE_PATH],  # add templates path # 3
        'APP_DIRS': True,
        'OPTIONS': {)
    },
]
```

### start an app

```bash
python manage.py startapp app
```

### define your model

```python
from django.db import models


class Icon(models.Model):
    name = models.CharField(max_length=30)
```

### Add IconWidget to form then add form to Admin.

```python
# app/admin.py
django.contrib import admin
from django import forms
from django_npick import IconWidget  # 4

from .models import Bingo


class BingoForm(forms.ModelForm):
    name = forms.CharField(widget=IconWidget)  # 5


class BingoAdmin(admin.ModelAdmin):
    form = BingoForm
    fields = ['name']

admin.site.register(Bingo, BingoAdmin)
```


### runserver

```bash
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

