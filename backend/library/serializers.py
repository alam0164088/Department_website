from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    cover_url = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = [
            'id', 'title', 'author', 'description',
            'cover_url', 'pdf_file', 'pdf_file_url',
            'year', 'semester', 'isbn', 'is_available'
        ]

    def get_cover_url(self, obj):
        if obj.cover_image_url:
            return obj.cover_image_url
        elif obj.cover_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.cover_image.url)
            return obj.cover_image.url
        return None

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        
        # cover image preference: file > url
        if instance.cover_image:
            rep['cover_image'] = instance.cover_image.url
        elif instance.cover_image_url:
            rep['cover_image'] = instance.cover_image_url
        else:
            rep['cover_image'] = None

        # pdf file preference: file > url
        if instance.pdf_file:
            rep['pdf_file'] = instance.pdf_file.url
        elif instance.pdf_file_url:
            rep['pdf_file'] = instance.pdf_file_url
        else:
            rep['pdf_file'] = None

        return rep
