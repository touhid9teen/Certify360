from rest_framework import serializers
from .models import User
import re

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    conform_password = serializers.CharField(write_only=True)  # Add confirm password field

    class Meta:
        model = User
        fields = ['email', 'fullname', 'mobile_number', 'nid', 'password', 'conform_password']
    

    # Custom validation
    def validate_email(self, value):
        if not re.match(r"[^@]+@[^@]+\.[^@]+", value):
            raise serializers.ValidationError("Enter a valid email address.")
        return value

    def validate_mobile_number(self, value):
        if not value.isdigit() or len(value) < 10:
            raise serializers.ValidationError("Mobile number must be digits and at least 10 characters long.")
        return value

    def validate_nid(self, value):
        if not value.isdigit() or len(value) != 20:
            raise serializers.ValidationError("National ID must be exactly 20 digits long.")
        return value

    # Validate if password and conform_password match
    def validate(self, data):
        password = data.get('password')
        conform_password = data.get('conform_password')
        
        if password != conform_password:
            raise serializers.ValidationError({"conform_password": "Password and confirm password do not match."})
        
        return data

    def create(self, validated_data):
        # Remove conform_password from validated data before passing it to the create_user method
        validated_data.pop('conform_password', None)
        
        # Use the custom manager's create_user method
        return User.objects.create_user(
            email=validated_data['email'],
            fullname=validated_data['fullname'],
            mobile_number=validated_data['mobile_number'],
            nid=validated_data['nid'],
            password=validated_data['password']
        )
