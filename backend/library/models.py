# library/models.py
from django.db import models
import os

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    # File fields
    cover_image = models.ImageField(upload_to='book_covers/', blank=True, null=True)
    pdf_file = models.FileField(upload_to='book_pdfs/', blank=True, null=True)

    # URL fields
    cover_image_url = models.URLField(blank=True, null=True, help_text="External URL for book cover image")
    pdf_file_url = models.URLField(blank=True, null=True, help_text="External URL for PDF file")

    # Additional fields
    year = models.CharField(max_length=20, blank=True, null=True)
    semester = models.CharField(max_length=20, blank=True, null=True)
    isbn = models.CharField(max_length=50, blank=True, null=True)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    def delete(self, *args, **kwargs):
        # Delete the files when the model instance is deleted
        if self.cover_image:
            if os.path.isfile(self.cover_image.path):
                os.remove(self.cover_image.path)
        if self.pdf_file:
            if os.path.isfile(self.pdf_file.path):
                os.remove(self.pdf_file.path)
        super().delete(*args, **kwargs)

    def save(self, *args, **kwargs):
        # Delete old files when updating with new ones
        if self.pk:
            try:
                old_instance = Book.objects.get(pk=self.pk)
                if old_instance.cover_image and self.cover_image != old_instance.cover_image:
                    if os.path.isfile(old_instance.cover_image.path):
                        os.remove(old_instance.cover_image.path)
                if old_instance.pdf_file and self.pdf_file != old_instance.pdf_file:
                    if os.path.isfile(old_instance.pdf_file.path):
                        os.remove(old_instance.pdf_file.path)
            except Book.DoesNotExist:
                pass
        super().save(*args, **kwargs)

    @property
    def cover_url(self):
        if self.cover_image_url:
            return self.cover_image_url
        elif self.cover_image:
            return self.cover_image.url
        return None

