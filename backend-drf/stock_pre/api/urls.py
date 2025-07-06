from django.urls import path
from accounts import views as userviews

urlpatterns = [

    path("register/",userviews.Resigsterview.as_view())
]
