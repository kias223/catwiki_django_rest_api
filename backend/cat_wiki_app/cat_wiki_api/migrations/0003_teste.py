# Generated by Django 4.2.1 on 2023-05-16 22:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cat_wiki_api', '0002_remove_catinfo_cat_img05_remove_catinfo_cat_img06_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Teste',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='teste_img')),
            ],
        ),
    ]
