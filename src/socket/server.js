const User = require('./../models/User');
const User = require('./../models/Group');

var ioEvents = function(io) {
    io.on('connection', function(socket){
        socket.on('client_identifier', function(data) {
            User.findOne({userName: data.userName}).exec(function (err, user) {
                if (err) {
                    console.log('err', err)
                    return done(err);
                }
                
                if (user) {
                    socket.join()
                } else {
                    /**
                     * create new user
                     */
                    var user = new User();
                    user.userName = Date.now().toString();
                    user.phoneNumber = '01626878789';
                    user.email = Date.now() + "@vega.com.vn";
                    user.password = '123456';

                    user.save(function(err) {
                        if (err) {
                            console.log('err', err);
                        } 
                        console.log('create new user successfully')
                        /**
                         * Create group
                         */

                    })
                }
            });
        });
    });
}

module.exports = ioEvents;