# Generated by Django 4.2.6 on 2024-06-30 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0002_menutype_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Specialoffer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('special_image', models.ImageField(upload_to='')),
                ('special_name', models.CharField(max_length=10)),
                ('special_desc', models.TextField()),
                ('special_price', models.IntegerField()),
            ],
        ),
    ]
