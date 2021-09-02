module.exports = {
  apps: [{
    name: 'cron-popwaifu',
    script: 'src/cron/main.js',
    instances: 1,
    autorestart: true,
    watch: false,
    kill_timeout: 60 * 1000,
    max_memory_restart: '512M',
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
