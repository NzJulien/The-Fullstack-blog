from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("projects/", views.ProjectViewSet.as_view({"get": "list", "post": "create"}), name="project-list"),
    path("projects/<int:pk>/", views.ProjectViewSet.as_view({"get": "retrieve", "put": "update", "delete": "destroy"}), name="project-detail"),
]