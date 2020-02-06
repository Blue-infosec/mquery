import logging

from itsdangerous import JSONWebSignatureSerializer
from redis import StrictRedis

import config


LOG_FORMAT = "[%(asctime)s][%(levelname)s] %(message)s"
LOG_DATEFMT = "%d/%m/%Y %H:%M:%S"


def setup_logging():
    logging.basicConfig(level=logging.INFO, format=LOG_FORMAT, datefmt=LOG_DATEFMT)


def make_redis():
    return StrictRedis(host=config.REDIS_HOST, port=config.REDIS_PORT, decode_responses=True)

