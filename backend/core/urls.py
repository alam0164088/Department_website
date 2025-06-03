from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from django.conf import settings
from django.conf.urls.static import static

def root_view(request):
    return JsonResponse({"message": "Welcome to the CSE Department API. Use /api/teachers/, /api/students/, or /api/library/ for data."})

urlpatterns = [
    path('', root_view, name='home'),
    path('admin/', admin.site.urls),
    path('api/teachers/', include('teachers.urls')),
    path('api/students/', include('students.urls')),
    path('api/library/', include('library.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)