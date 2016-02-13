import os
from extra.skgen import generate

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = True if os.environ.get('DEBUG') == 'True' else False

CORE_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles'
)

THIRD_PARTY_APPS = (
    'rest_framework',
)

DEV_APPS = (
    'corsheaders',
    'django_extensions'
)

APPS = (
    'api',
    'analytics',
    'webapp'
)

INSTALLED_APPS = CORE_APPS + THIRD_PARTY_APPS + APPS

MIDDLEWARE_CLASSES = (
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)

ROOT_URLCONF = 'wordsoup.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'webapp')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'wordsoup.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get('DBNAME'),
        'USER': os.environ.get('DBUSER'),
        'PASSWORD': os.environ.get('DBPASSW'),
        'HOST': 'localhost',
        'PORT': '',
    }
}

INTERNAL_IPS = [
    '10.8.0.18',
    '0.0.0.0',
    '127.0.0.1'
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Canada/Eastern'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_ROOT = os.path.join(BASE_DIR, 'assets')

STATIC_URL = '/static/'

STATICFILES_DIRS = [os.path.join(BASE_DIR, 'webapp')]

BROKER_URL = 'redis://localhost:6379/0'

if DEBUG:
    SECRET_KEY = ';)'
    INSTALLED_APPS += DEV_APPS
    ALLOWED_HOSTS = []
    CORS_ORIGIN_ALLOW_ALL = True
else:
    ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS').split(', ')
    SECRET_KEY = generate()
    MIDDLEWARE_CLASSES += ('wordsoup.middleware.InternalOnlyMiddleware',)
