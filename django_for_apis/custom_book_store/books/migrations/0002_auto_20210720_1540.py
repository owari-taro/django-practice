# Generated by Django 3.1 on 2021-07-20 06:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='book',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='books.book'),
        ),
    ]
