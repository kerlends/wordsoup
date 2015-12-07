# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.contrib.postgres.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Word',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('word', models.CharField(max_length=50)),
                ('charsort', models.CharField(max_length=50, editable=False, blank=True)),
                ('length', models.PositiveIntegerField(null=True, editable=False, blank=True)),
                ('charlist', django.contrib.postgres.fields.ArrayField(default=list, base_field=models.CharField(max_length=25, blank=True), editable=False, size=25)),
            ],
        ),
    ]
