module.exports = {
  apps: [{
    name: 'server-popwaifu',
    script: 'src/server/main.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    kill_timeout: 20000,
    max_memory_restart: '1024M',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
