# library/admin.py

from django.contrib import admin
from .models import Book

class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'isbn', 'is_available')
    fields = (
        'title', 'author', 'description',
        'cover_image', 'cover_image_url',
        'pdf_file', 'pdf_file_url',
        'year', 'semester', 'isbn', 'is_available'
    )


admin.site.register(Book, BookAdmin)
