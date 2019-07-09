import sys

if sys.argv[1] == "webapp":
    from .webapp import app
    app.run(host='0.0.0.0')
elif sys.argv[1] == "daemon":
    from .daemon import job_daemon
    job_daemon()
else:
    print("Unknown work mode")
    sys.exit(1)

