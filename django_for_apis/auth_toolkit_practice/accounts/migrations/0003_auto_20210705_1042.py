# Generated by Django 3.1 on 2021-07-05 01:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_customuser_is_avtive'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customuser',
            old_name='is_avtive',
            new_name='is_alive',
        ),
    ]
