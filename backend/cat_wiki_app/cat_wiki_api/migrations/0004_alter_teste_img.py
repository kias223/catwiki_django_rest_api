# Generated by Django 4.2.1 on 2023-05-17 00:26

import cat_wiki_api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cat_wiki_api', '0003_teste'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teste',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to=cat_wiki_api.models.upload_image_formater),
        ),
    ]