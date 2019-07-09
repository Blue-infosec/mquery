import setuptools

setuptools.setup(
    name='mquery',  
    version='1.0',
    author="msm",
    author_email="msm@tailcall.net",
    description="mquery web application",
    url="https://github.com/CERT-Polska/mquery",
    packages=['mquery'],
    include_package_data=True,
    zip_safe=False,
    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
    ],
)
