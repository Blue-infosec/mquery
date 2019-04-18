# mquery: installation

There are three supported installation methods.

## 1. Run with docker compose

The easiest installation method. Recommended for testing and small deployments.

```bash
$ curl TODO.URL.HERE > docker-compose.yml
$ sudo docker-compose up
```

## 2. Install with dpkg (experimental)

For Debian-like systems, we provide an (experimental) dpkg package.

```bash
$ dpkg-add-wtf wtf.wtf.wtf
$ apt install mquery ursadb
```

## 3. Manual installation

Build and install mquery manually.

1. Install and configure ursadb first [TODO LINK]

2. Build the frontend

```bash
$ sudo apt install -y nodejs npm python3
$ git clone https://github.com/CERT-Polska/mquery.git
$ cd mqueryfront
$ npm install
```

3. Configure and run the website

$ pip install -r requirements.txt
$ cp config.example.py config.py

## 4. Kubernetes deployment

This is not an officially supported installation method, but it's the one we actually use.
TODO blah blah