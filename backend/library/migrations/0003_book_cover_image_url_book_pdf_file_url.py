# Generated by Django 5.2.1 on 2025-06-03 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0002_remove_book_created_at_book_cover_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='cover_image_url',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='book',
            name='pdf_file_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
