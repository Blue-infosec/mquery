import setuptools

setuptools.setup(
    name="mquery",
    version="1.0",
    author="msm",
    author_email="msm@tailcall.net",
    description="mquery web application",
    url="https://github.com/CERT-Polska/mquery",
    packages=setuptools.find_packages(),
    scripts=["mquery-webapp", "mquery-daemon"],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        "certifi==2018.11.29",
        "chardet==3.0.4",
        "Click==7.0",
        "Flask==1.0.2",
        "idna==2.8",
        "itsdangerous==1.1.0",
        "Jinja2==2.10",
        "MarkupSafe==1.1.0",
        "ply==3.11",
        "plyara==1.4.1",
        "pyparsing==2.3.1",
        "pyzmq==17.1.2",
        "redis==3.0.1",
        "requests==2.21.0",
        "urllib3==1.24.1",
        "uWSGI==2.0.17.1",
        "Werkzeug==0.14.1",
        "yara-python==3.8.1"
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
    ],
)
