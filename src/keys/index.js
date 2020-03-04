const dev = !(process.env.NODE_ENV === 'production')
if(dev) {
    module.exports=require('./keys_dev')
} else {
    module.exports=require('./keys_prod')
}