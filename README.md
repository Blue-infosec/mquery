# mquery: Blazingly fast Yara queries for malware analysts

Ever had trouble searching for particular malware samples? Our project is an analyst-friendly web GUI to look through your digital warehouse.

You can use mquery to search through terabytes of malware in a blink of an eye:

![mquery web GUI](docs/mquery-web-ui.gif?raw=1)

Under the hood, mquery uses [UrsaDB trigram database](https://github.com/CERT-Polska/ursadb) to do the heavy lifting.


## How does it work?

YARA is pretty fast, but searching through large dataset for given signature can take a lot of time. To countermeasure this, we have implemented a custom database called UrsaDB. It is able to pre-filter the results, so it is only necessary to run YARA against a small fraction of binaries:

![mquery flowchart](docs/mquery-flowchart.png?raw=1)


Demo
-----------------

Take a look at [https://mquery.tailcall.net](https://mquery.tailcall.net) for a quick demo.

Unfortunately, you won't find any actual malware there. For demo purposes we
have indexed the sources of this project - for example, you can find all occurences
of the string "Exception" in the source code with this yara rule:

```
rule find_exceptions: trojan
{
    meta:
        author = "mquery_demo"
    strings:
        $exception_string = "Exception"
    condition:
        all of them
}
```

## Installation from PyPi (recommended method)

PyPi is currently a recommended way to install mquery. First, install the dependencies:

```
sudo apt install redis-server
```

Then, install mquery itself:

```
pip3 install mquery
```

Verify that it installed correctly with the following commands: 
```
mquery --version
mquery_daemon --version
ursadb_cli --version
```

(TODO systemd install)

## Installation from source (for developers and contributors)

First, install the dependencies:

```
sudo apt install redis-server
```

Then, clone the repository:

```
git clone https://github.com/CERT-Polska/mquery.git
```

Then, install the requirements.txt

```
python3 -mvenv venv
./venv/bin/activate  # or source venv/bin/activate.fish for some of us
pip install -r requirements.txt
```

Verify that it installed correctly with the following commands: 
```
mquery --version
mquery_daemon --version
ursadb_cli --version
```

Use default configs:

```
cp config.example.py config.py
cp mqueryfront/src/config.dist.js mqueryfront/src/config.js
```

Build and install frontend

```
cd mqueryfront
npm install
npm run build
```

## First steps

1. After installation, web interface should be available on `http://localhost:80/`
2. todo index
3. After successful indexing, your files should be searchable. Open the web interface and upload some YARA rule, e.g.:

```
rule emotet4_basic: trojan
{
    meta:
        author = "cert.pl"
    strings:
        $emotet4_rsa_public = { 8d ?? ?? 5? 8d ?? ?? 5? 6a 00 68 00 80 00 00 ff 35 [4] ff 35 [4] 6a 13 68 01 00 01 00 ff 15 [4] 85 }
        $emotet4_cnc_list = { 39 ?? ?5 [4] 0f 44 ?? (FF | A3)}
    condition:
        all of them
}
```

For administrative commands, see [CERT-Polska/ursadb](https://github.com/CERT-Polska/ursadb#queries).


## Maintainers

Questions/comments/pull requests are welcome.

* Michał Leszczyński (monk@cert.pl)
* Jarosław Jedynak (msm@cert.pl)
