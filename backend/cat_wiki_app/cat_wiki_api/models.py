from django.db import models
import uuid

# Create your models here.


class CatInfo(models.Model):
    cat_habilit_choice = (
        ('1', '1'),
        ('2', '2'),
        ('3', '3'),
        ('4', '4'),
        ('5', '5'),
    )

    top_cat_img = models.ImageField(upload_to='cat_img')
    name = models.CharField(max_length=20)
    info = models.TextField()
    temperament = models.CharField(max_length=200)
    origin = models.CharField(max_length=100)
    life_span = models.CharField(max_length=50)
    adaptability = models.CharField(choices=cat_habilit_choice, max_length=5)
    affection_level = models.CharField(
        choices=cat_habilit_choice, max_length=5)
    child_frienfly = models.CharField(choices=cat_habilit_choice, max_length=5)
    grooming = models.CharField(choices=cat_habilit_choice, max_length=5)
    intelligence = models.CharField(choices=cat_habilit_choice, max_length=5)
    health_issues = models.CharField(choices=cat_habilit_choice, max_length=5)
    social_needs = models.CharField(choices=cat_habilit_choice, max_length=5)
    stranger_friendly = models.CharField(
        choices=cat_habilit_choice, max_length=5)
    cat_img01 = models.ImageField(upload_to='cat_img', blank=True, null=True)
    cat_img02 = models.ImageField(upload_to='cat_img', blank=True, null=True)
    cat_img03 = models.ImageField(upload_to='cat_img', blank=True, null=True)
    cat_img04 = models.ImageField(upload_to='cat_img', blank=True, null=True)


def upload_image_formater(instance, filename):
    return f'{str(uuid.uuid4())}--{filename}'


class Teste(models.Model):
    img = models.ImageField(
        upload_to='teste_img', blank=True, null=True)
