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

2. Clone the source code

```bash
$ git clone https://github.com/CERT-Polska/mquery.git
cd mquery
```

2. Build the frontend

```bash
$ sudo apt install -y nodejs npm
$ cp src/config.dist.js src/config.js
$ cd mqueryfront
$ npm install
$ npm run build
```

3. Configure and run the website

```bash
$ sudo apt install python3
$ pip install -r requirements.txt
$ cp config.example.py config.py
$ python3 webapp.py --host 127.0.0.1 --port 5000  # consider uwsgi for production
```

## 4. Kubernetes deployment

This is not an officially supported installation method, but it's the one we actually use.
TODO blah blah