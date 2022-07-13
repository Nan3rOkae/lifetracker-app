\ echo 'Delete and recreate lifetracker-hub db'
\prompt 'Return for yes or control-C o cancel>' answer

DROP DATABASE lifetracker-hub;
CREATE DATABASE lifetracker-hub;
\connect lifetracker-hub;

\i lifetracker-hub-schema.sql