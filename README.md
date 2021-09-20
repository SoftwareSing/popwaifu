# popwaifu

Here is [popwaifu.click](https://popwaifu.click/) backend project.  
Frontend project is on [popwaifu-web](https://github.com/SoftwareSing/popwaifu-web)

## run server

1. Install Node.js  
   I use 14.17.6 when writing this, recommend using [NVM](https://github.com/nvm-sh/nvm) to install Node.js
2. Install MongoDB and Redis
3. git clone this project
4. run `npm install`
5. run `npm run build_web` to build frontend file
6. run `npm run server_dev` to start a develop server

## file architecture

- [config](/config) folder put some config file, you can change your MongoDB connection config here
- [dev-script](/dev-script) folder put some script help develop, you can use [insertWaifu.js](/dev-script/insertWaifu.js) to quickly put some waifu into your DB
- [popwaifu-web](/popwaifu-web) folder is a git submodule folder, it link to [popwaifu-web](https://github.com/SoftwareSing/popwaifu-web) project
- [src](/src) folder is our source code folder

### src

I try to follow [this video](https://youtu.be/gX5oB4fgX6U?t=2568)'s architecture

[entity](/src/entity) is the basic object, you can use repository object to get a entity object.  
For example, you can use [WaifuRepo.getByUrlId()](/src/entity/waifu/WaifuRepo.js) to get a [Waifu](/src/entity/waifu/Waifu.js), and [WaifuRepo](/src/entity/waifu/WaifuRepo.js)'s methods should be the only way how you get this entity.
