from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager

class BaseManager(BaseUserManager):
    def create_user(self, email, name, mobile_number, nid, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field is required.")
        email = self.normalize_email(email)

        user = self.model(
            email=email,
            name=name,
            mobile_number=mobile_number,
            nid=nid,
            **extra_fields
        )
        if password:
            user.set_password(password)  # Hash the password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, mobile_number, nid, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, name, mobile_number, nid, password, **extra_fields)

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    mobile_number = models.CharField(max_length=15)
    nid = models.CharField(max_length=20, unique=True)  # National ID
    password = models.CharField(max_length=128)

    # Custom manager
    objects = BaseManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'mobile_number', 'nid']

    def __str__(self):
        return self.email
