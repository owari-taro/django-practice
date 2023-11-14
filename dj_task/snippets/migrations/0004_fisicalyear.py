# Generated by Django 4.2.1 on 2023-11-13 06:05

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("snippets", "0003_feedback_pref"),
    ]

    operations = [
        migrations.CreateModel(
            name="FisicalYear",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("year", models.IntegerField(help_text="年度", unique=True)),
            ],
        ),
    ]
