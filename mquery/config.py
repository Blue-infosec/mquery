import os

from mquery.metadata.cuckoo_analysis import CuckooAnalysisMetadata

BACKEND = os.environ.get("MQUERY_BACKEND", "tcp://localhost:9281")
REDIS_HOST = os.environ.get("REDIS_HOST", "localhost")
REDIS_PORT = int(os.environ.get("REDIS_PORT", 6379))
METADATA_EXTRACTORS = [CuckooAnalysisMetadata("/mnt/samples/analyses/")]

