# Generated by Django 3.1 on 2021-07-05 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_element'),
    ]

    operations = [
        migrations.AddField(
            model_name='element',
            name='comment',
            field=models.TextField(default=None, max_length=300),
            preserve_default=False,
        ),
    ]
