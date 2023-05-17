# Generated by Django 4.2.1 on 2023-05-15 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CatInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('top_cat_img', models.ImageField(upload_to='cat_img')),
                ('name', models.CharField(max_length=20)),
                ('info', models.TextField()),
                ('temperament', models.CharField(max_length=200)),
                ('origin', models.CharField(max_length=100)),
                ('life_span', models.CharField(max_length=50)),
                ('adaptability', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')], max_length=5)),
                ('affection_level', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')], max_length=5)),
                ('child_frienfly', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')], max_length=5)),
                ('grooming', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')], max_length=5)),
                ('intelligence', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')], max_length=5)),
                ('health_issues', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')], max_length=5)),
                ('social_needs', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')], max_length=5)),
                ('stranger_friendly', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')], max_length=5)),
                ('cat_img01', models.ImageField(blank=True, null=True, upload_to='cat_img')),
                ('cat_img02', models.ImageField(blank=True, null=True, upload_to='cat_img')),
                ('cat_img03', models.ImageField(blank=True, null=True, upload_to='cat_img')),
                ('cat_img04', models.ImageField(blank=True, null=True, upload_to='cat_img')),
                ('cat_img05', models.ImageField(blank=True, null=True, upload_to='cat_img')),
                ('cat_img06', models.ImageField(blank=True, null=True, upload_to='cat_img')),
                ('cat_img07', models.ImageField(blank=True, null=True, upload_to='cat_img')),
                ('cat_img08', models.ImageField(blank=True, null=True, upload_to='cat_img')),
            ],
        ),
    ]